type Chess = '❌' | '⭕' | '⬜';
type RowIdx = 0 | 1 | 2;
type ColIdx = 0 | 1 | 2;

type Grid<T extends Chess = '⬜'> = {
  hasChess: T extends '⬜' ? false : true;
  chess: T;
}

type Row<
  G1 extends Grid<Chess> = Grid,
  G2 extends Grid<Chess> = Grid,
  G3 extends Grid<Chess> = Grid>
  = [G1, G2, G3]
type Board<
  R1 extends Row<Grid<Chess>, Grid<Chess>, Grid<Chess>> = Row,
  R2 extends Row<Grid<Chess>, Grid<Chess>, Grid<Chess>> = Row,
  R3 extends Row<Grid<Chess>, Grid<Chess>, Grid<Chess>> = Row
  > = [R1, R2, R3]

type RenderGrid<G extends Grid> = G['hasChess'] extends true ? G['chess'] : '⬜';
type RenderRow<R extends [Grid, Grid, Grid]> = `${RenderGrid<R[0]>}${RenderGrid<R[1]>}${RenderGrid<R[2]>}`;
type RenderBoard<B extends any[]> = {
  0: RenderRow<B[0]>,
  1: RenderRow<B[1]>,
  2: RenderRow<B[2]>,
};

type SetChess<B extends
  Board<
    Row<Grid<Chess>, Grid<Chess>, Grid<Chess>>,
    Row<Grid<Chess>, Grid<Chess>, Grid<Chess>>,
    Row<Grid<Chess>, Grid<Chess>, Grid<Chess>>
  >,
  RN extends RowIdx,
  CN extends ColIdx,
  C extends Chess,
  Result extends any[] = [],
  CurrRow extends any[] = []>
  = B[RN][CN]['hasChess'] extends true
  ? never
  : CurrRow['length'] extends 3 ? Result
  : (
    RN extends CurrRow['length']
    ? SetChess<B, RN, CN, C,
      [...Result,
        B[RN] extends [infer One, infer Two, infer Three]
        ? CN extends 0
        ? [Grid<C>, Two, Three]
        : CN extends 1
        ? [One, Grid<C>, Three]
        : [One, Two, Grid<C>]
        : never
      ], [...CurrRow, any]>
    : SetChess<B, RN, CN, C, [...Result, B[CurrRow['length']]], [...CurrRow, any]>)


type NewGame = Board
type renderGame0 = RenderBoard<NewGame>

type step1 = SetChess<NewGame, 1, 1, '❌'>
type renderGame1 = RenderBoard<step1>

type step2 = SetChess<step1, 2, 1, '⭕'>
type renderGame2 = RenderBoard<step2>

type step3 = SetChess<step2, 1, 0, '❌'>
type renderGame3 = RenderBoard<step3>

type step4 = SetChess<step3, 1, 2, '⭕'>
type renderGame4 = RenderBoard<step4>

type step5 = SetChess<step4, 2, 0, '❌'>
type renderGame5 = RenderBoard<step5>

type step6 = SetChess<step5, 0, 0, '⭕'>
type renderGame6 = RenderBoard<step6>

type step7 = SetChess<step6, 0, 2, '❌'>
type renderGame7 = RenderBoard<step7>