"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { demoMatches } from "./demo-data";

function ScoreTeam({
  team,
  score,
  innings,
  active = false,
}: {
  team: (typeof demoMatches)[number]["teams"][number];
  score: (typeof demoMatches)[number]["innings"][number];
  innings: string;
  active?: boolean;
}) {
  return (
    <div className={`score-team${active ? " score-team--active" : ""}`}>
      <div className="score-team__identity">
        <span className="team-mark" style={{ "--team-accent": team.accent } as CSSProperties}>
          {team.shortName}
        </span>
        <div>
          <span className="score-team__name">{team.name}</span>
          <span className="score-team__innings">{innings}</span>
        </div>
      </div>
      <div className="score-team__numbers">
        <strong>{score.runs}/{score.wickets}</strong>
        <span>{score.overs} overs</span>
      </div>
    </div>
  );
}

export default function Scoreboard() {
  const [selectedMatchId, setSelectedMatchId] = useState(demoMatches[0].id);
  const match = demoMatches.find(({ id }) => id === selectedMatchId) ?? demoMatches[0];
  const [firstInnings, currentInnings] = match.innings;
  const chaseProgress = Math.min((currentInnings.runs / match.target) * 100, 100);

  return (
    <main className="scoreboard-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Crease match centre home">
          <span className="brand__mark">C</span>
          <span className="brand__wordmark">CREASE</span>
          <span className="brand__divider" />
          <span className="brand__descriptor">MATCH CENTRE</span>
        </Link>
        <div className="topbar__status">
          <span className="demo-chip"><span className="demo-chip__dot" />DEMO DATA</span>
          <span className="season-label">2026 SEASON</span>
        </div>
      </header>

      <div className="page-content">
        <section className="page-heading" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">CRICKET · MATCH SCOREBOARD</p>
            <h1 id="page-title">Centre match</h1>
          </div>
          <label className="match-picker">
            <span>Sample fixture</span>
            <select
              value={selectedMatchId}
              onChange={(event) => setSelectedMatchId(event.target.value)}
              aria-label="Choose a sample match"
            >
              {demoMatches.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.teams[0].shortName} v {item.teams[1].shortName} · {item.matchNumber}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="match-hero" aria-labelledby="match-title">
          <div className="match-hero__topline">
            <div>
              <p className="match-hero__competition">{match.competition} <span> / </span> {match.matchNumber}</p>
              <p className="match-hero__venue">{match.venue}</p>
            </div>
            <span className="sample-stamp">SAMPLE MATCH <span>·</span> NOT LIVE</span>
          </div>

          <h2 className="visually-hidden" id="match-title">
            {match.teams[0].name} versus {match.teams[1].name}
          </h2>

          <div className="match-hero__scores">
            <ScoreTeam team={match.teams[0]} score={firstInnings} innings="1ST INNINGS" />
            <div className="score-separator" aria-hidden="true"><span>V</span><span>S</span></div>
            <ScoreTeam team={match.teams[1]} score={currentInnings} innings="2ND INNINGS · CHASING" active />
          </div>

          <div className="chase-summary">
            <div className="chase-summary__main">
              <span className="chase-summary__label">CHASE IN PROGRESS</span>
              <strong>{match.teams[1].shortName} need {match.runsNeeded} from {match.ballsRemaining} balls</strong>
            </div>
            <div className="chase-rates">
              <span><b>{match.currentRunRate}</b> current rate</span>
              <span><b>{match.requiredRunRate}</b> required rate</span>
            </div>
            <div className="chase-meter" role="img" aria-label={`${Math.round(chaseProgress)} percent of the target scored`}>
              <span style={{ width: `${chaseProgress}%` }} />
            </div>
            <div className="chase-meter__labels"><span>0</span><span>TARGET {match.target}</span></div>
          </div>
        </section>

        <section className="match-facts" aria-label="Match details">
          <div className="match-fact">
            <span className="match-fact__label">TARGET</span>
            <strong>{match.target}</strong>
            <span className="match-fact__detail">to win</span>
          </div>
          <div className="match-fact">
            <span className="match-fact__label">PARTNERSHIP</span>
            <strong>{match.partnership}</strong>
            <span className="match-fact__detail">from {match.partnershipBalls} balls</span>
          </div>
          <div className="match-fact">
            <span className="match-fact__label">BALLS LEFT</span>
            <strong>{match.ballsRemaining}</strong>
            <span className="match-fact__detail">in the innings</span>
          </div>
        </section>

        <div className="scorecards-grid">
          <section className="scorecard-panel" aria-labelledby="batting-title">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">INNINGS 2 · {match.teams[1].shortName}</p>
                <h2 id="batting-title">Batting</h2>
              </div>
              <span className="panel-total">{currentInnings.runs}/{currentInnings.wickets}</span>
            </div>
            <div className="table-scroll">
              <table className="score-table batting-table">
                <thead>
                  <tr><th scope="col">Batter</th><th scope="col">R</th><th scope="col">B</th><th scope="col">4s</th><th scope="col">6s</th><th scope="col">SR</th></tr>
                </thead>
                <tbody>
                  {match.batters.map((batter) => (
                    <tr key={batter.name}>
                      <td className="player-cell">
                        <span className="player-cell__name">{batter.name}{batter.onStrike && <span className="strike-mark" aria-label="on strike">*</span>}</span>
                        <span className="player-cell__detail">{batter.detail}</span>
                      </td>
                      <td className="number-cell number-cell--strong">{batter.runs}<span className="dismissal">{batter.status}</span></td>
                      <td>{batter.balls}</td><td>{batter.fours}</td><td>{batter.sixes}</td><td>{batter.strikeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="innings-summary">
              <span>Extras <b>{match.extras}</b></span>
              <span>Total <b>{currentInnings.runs}/{currentInnings.wickets} <i>({currentInnings.overs} ov)</i></b></span>
            </div>
            <p className="scorecard-note">* indicates the batter currently on strike</p>
          </section>

          <section className="scorecard-panel" aria-labelledby="bowling-title">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">INNINGS 2 · {match.teams[0].shortName}</p>
                <h2 id="bowling-title">Bowling</h2>
              </div>
              <span className="overs-badge">{currentInnings.overs} OVERS</span>
            </div>
            <div className="table-scroll">
              <table className="score-table bowling-table">
                <thead>
                  <tr><th scope="col">Bowler</th><th scope="col">O</th><th scope="col">M</th><th scope="col">R</th><th scope="col">W</th><th scope="col">Econ</th></tr>
                </thead>
                <tbody>
                  {match.bowlers.map((bowler) => (
                    <tr key={bowler.name}>
                      <td className="player-cell">
                        <span className="player-cell__name">{bowler.name}</span>
                        <span className="player-cell__detail">{bowler.detail}</span>
                      </td>
                      <td>{bowler.overs}</td><td>{bowler.maidens}</td><td>{bowler.runs}</td>
                      <td className="number-cell--strong">{bowler.wickets}</td><td>{bowler.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="innings-summary innings-summary--bowling">
              <span>Current spell</span>
              <span><b>{match.bowlers[0].name}</b></span>
            </div>
            <p className="scorecard-note">O overs · M maidens · R runs · W wickets</p>
          </section>
        </div>

        <section className="recent-over" aria-labelledby="recent-over-title">
          <div className="recent-over__heading">
            <div>
              <p className="eyebrow">BALL BY BALL</p>
              <h2 id="recent-over-title">Recent deliveries</h2>
            </div>
            <span className="recent-over__sum">LAST OVER <b>{match.recentSummary}</b></span>
          </div>
          <div className="delivery-list">
            {match.recentBalls.map((delivery) => (
              <div className="delivery" key={delivery.ball}>
                <span className="delivery__over">{delivery.ball}</span>
                <span className={`delivery__result delivery__result--${delivery.kind}`}>{delivery.result}</span>
              </div>
            ))}
          </div>
          <p className="demo-disclaimer">Demo scoreboard only. Sample scores and player figures are not connected to a live data provider.</p>
        </section>
      </div>
    </main>
  );
}