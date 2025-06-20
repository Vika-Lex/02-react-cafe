import style from './VoteOptions.module.css'
import type {VoteType} from "../../types/votes.ts";

export interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean
}

const VoteOptions = ({onVote, onReset, canReset}:VoteOptionsProps) => {
    return (
        <div className={style.container}>
            <button onClick={() => onVote('good')} className={style.button}>Good</button>
            <button onClick={() => onVote('neutral')} className={style.button}>Neutral</button>
            <button onClick={() => onVote('bad')} className={style.button}>Bad</button>
            {canReset && (
                <button onClick={onReset} className={`${style.button} ${style.reset}`}>Reset</button>
            )}
        </div>
    );
};
export default VoteOptions