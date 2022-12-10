//these elements are randomly generated at the start of the experiment
//after being generated, they keep the same value throughout the experiment

import { shuffle } from './convenienceFunctions';
import {
    circle_ids, color_palette, mode, urn_ids, urn_letters, PROBS, colors, actualWorld,
    threshold
} from './gameParameters'

// import pictures

import bx2n34v38 from './bx2_34vs38.PNG';
import bx2n34v42 from './bx2_34vs42.PNG';
import bx2n34v46 from './bx2_34vs46.PNG';
import bx2n34v50 from './bx2_34vs50.PNG';
import bx2n38v42 from './bx2_38vs42.PNG';
import bx2n38v46 from './bx2_38vs46.PNG';
import bx2n38v50 from './bx2_38vs50.PNG';
import bx2n42v46 from './bx2_42vs46.PNG';
import bx2n42v50 from './bx2_42vs50.PNG';
import bx2n46v50 from './bx2_46vs50.PNG';

import bx2w30v34 from './bx2w_30vs34.PNG';
import bx2w30v38 from './bx2w_30vs38.PNG';
import bx2w30v42 from './bx2w_30vs42.PNG';
import bx2w30v46 from './bx2w_30vs46.PNG';
import bx2w34v38 from './bx2w_34vs38.PNG';
import bx2w34v42 from './bx2w_34vs42.PNG';
import bx2w34v46 from './bx2w_34vs46.PNG';
import bx2w38v42 from './bx2w_38vs42.PNG';
import bx2w38v46 from './bx2w_38vs46.PNG';
import bx2w42v46 from './bx2w_42vs46.PNG';

import sy3n54v58 from './sy3_54vs58.PNG';
import sy3n54v62 from './sy3_54vs62.PNG';
import sy3n54v66 from './sy3_54vs66.PNG';
import sy3n54v70 from './sy3_54vs70.PNG';
import sy3n58v62 from './sy3_58vs62.PNG';
import sy3n58v66 from './sy3_58vs66.PNG';
import sy3n58v70 from './sy3_58vs70.PNG';
import sy3n62v66 from './sy3_62vs66.PNG';
import sy3n62v70 from './sy3_62vs70.PNG';
import sy3n66v70 from './sy3_66vs70.PNG';

import sy3w50v54 from './sy3w_50vs54.PNG';
import sy3w50v58 from './sy3w_50vs58.PNG';
import sy3w50v62 from './sy3w_50vs62.PNG';
import sy3w50v66 from './sy3w_50vs66.PNG';
import sy3w54v58 from './sy3w_54vs58.PNG';
import sy3w54v62 from './sy3w_54vs62.PNG';
import sy3w54v66 from './sy3w_54vs66.PNG';
import sy3w58v62 from './sy3w_58vs62.PNG';
import sy3w58v66 from './sy3w_58vs66.PNG';
import sy3w62v66 from './sy3w_62vs66.PNG';




// a list of judgments (defined by the lower bound of each interval)
export const judgments_sy3_wshaped = {
    "r5054": [50, 54, sy3w50v54],
    "r5058": [50, 58, sy3w50v58],
    "r5062": [50, 62, sy3w50v62],
    "r5066": [50, 66, sy3w50v66],
    "r5458": [54, 58, sy3w54v58],
    "r5462": [54, 62, sy3w54v62],
    "r5466": [54, 66, sy3w54v66],
    "r5862": [58, 62, sy3w58v62],
    "r5866": [58, 66, sy3w58v66],
    "r6266": [62, 66, sy3w62v66]
};

export const judgments_sy3_nshaped = {
    "r5458": [54, 58, sy3n54v58],
    "r5462": [54, 62, sy3n54v62],
    "r5466": [54, 66, sy3n54v66],
    "r5470": [54, 70, sy3n54v70],
    "r5862": [58, 62, sy3n58v62],
    "r5866": [58, 66, sy3n58v66],
    "r5870": [58, 70, sy3n58v70],
    "r6266": [62, 66, sy3n62v66],
    "r6270": [62, 70, sy3n62v70],
    "r6670": [66, 70, sy3n66v70]
};

export const judgments_bx2_wshaped = {
    "r3034": [30, 34, bx2w30v34],
    "r3038": [30, 38, bx2w30v38],
    "r3042": [30, 42, bx2w30v42],
    "r3046": [30, 46, bx2w30v46],
    "r3438": [34, 38, bx2w34v38],
    "r3442": [34, 42, bx2w34v42],
    "r3446": [34, 46, bx2w34v46],
    "r3842": [38, 42, bx2w38v42],
    "r3846": [38, 46, bx2w38v46],
    "r4246": [42, 46, bx2w42v46]
};

export const judgments_bx2_nshaped = {
    "r3438": [34, 38, bx2n34v38],
    "r3442": [34, 42, bx2n34v42],
    "r3446": [34, 46, bx2n34v46],
    "r3450": [34, 50, bx2n34v50],
    "r3842": [38, 42, bx2n38v42],
    "r3846": [38, 46, bx2n38v46],
    "r3850": [38, 50, bx2n38v50],
    "r4246": [42, 46, bx2n42v46],
    "r4250": [42, 50, bx2n42v50],
    "r4650": [46, 50, bx2n46v50]
};


export const questions_sy3w = shuffle(["r5054", "r5058", "r5062", "r5066",
    "r5458", "r5462", "r5466", "r5862", "r5866", "r6266"]);

export const questions_sy3n = shuffle(["r5458", "r5462", "r5466", "r5470",
    "r5862", "r5866", "r5870", "r6266", "r6270", "r6670"]);

export const questions_bx2w = shuffle(["r3034", "r3038", "r3042", "r3046",
    "r3438", "r3442", "r3446", "r3842", "r3846", "r4246"]);

export const questions_bx2n = shuffle(["r3438", "r3442", "r3446", "r3450", "r3842",
    "r3846", "r3850", "r4246", "r4250", "r4650"]);


export const trial_ids = [...Array(questions_bx2n.length).keys()];


export const conditions = shuffle([shuffle(["sy3n", "bx2w"]), shuffle(["sy3w", "bx2n"])])[0];
console.log(conditions);


//a variable randomly assigning the participant to answer the probability
//comprehension questions either before or after the main task
export const probCheckOrder = "last";




