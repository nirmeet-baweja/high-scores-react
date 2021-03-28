const sortByScoreAsc = (a, b) => a.s - b.s;
const sortByScoreDsc = (a, b) => -1 * (a.s - b.s);

export { sortByScoreAsc, sortByScoreDsc };
