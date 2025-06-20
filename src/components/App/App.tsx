import style from './App.module.css'
import type {Votes, VoteType} from '../../types/votes.ts'
import {useState} from "react";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";

function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleVote = (type: VoteType): void => {
        setVotes(prevState => ({
            ...prevState,
            [type]: prevState[type] + 1
        }))
    };

    const resetVotes = (): void => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0
        })
    };

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes
        ? Math.round((votes.good / totalVotes) * 100)
        : 0

    return (
        <div className={style.app}>
            <CafeInfo/>
            <VoteOptions onVote={handleVote}
                         onReset={resetVotes}
                         canReset={totalVotes > 0}
            />
            {totalVotes > 0 ? (
                    <VoteStats votes={votes}
                               totalVotes={totalVotes}
                               positiveRate={positiveRate}
                    />) :
                <Notification/>
            }
        </div>
    )
}

export default App
