type Chess = '❌' | '⭕' | '⬜';
type RowIdx = 0 | 1 | 2;
type ColIdx = 0 | 1 | 2;

type Grid<T extends Chess = '⬜'> = {
  hasChess: T extends '⬜' ? false : true;
  chess: T;
}

type WonShape<T extends Chess> = [Grid<T>, Grid<T>, Grid<T>]

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
  X extends RowIdx,
  Y extends ColIdx,
  C extends Chess,
  Result extends any[] = [],
  CurrRow extends any[] = []>
  = B[X][Y]['hasChess'] extends true
  ? never
  : CurrRow['length'] extends 3 ? Result
  : (
    X extends CurrRow['length']
    ? SetChess<B, X, Y, C,
      [...Result,
        B[X] extends [infer One, infer Two, infer Three]
        ? Y extends 0
        ? [Grid<C>, Two, Three]
        : Y extends 1
        ? [One, Grid<C>, Three]
        : [One, Two, Grid<C>]
        : never
      ], [...CurrRow, any]>
    : SetChess<B, X, Y, C, [...Result, B[CurrRow['length']]], [...CurrRow, any]>)


type CheckGameStatus<B extends
  Board<
    Row<Grid<Chess>, Grid<Chess>, Grid<Chess>>,
    Row<Grid<Chess>, Grid<Chess>, Grid<Chess>>,
    Row<Grid<Chess>, Grid<Chess>, Grid<Chess>>
  >> = B extends [infer R1, infer R2, infer R3]
  ? (
    WonShape<'❌'> extends
    | R1 | R2 | R3
    | [B[0][0], B[1][1], B[2][2]]
    | [B[0][2], B[1][1], B[2][0]]
    | [B[0][0], B[1][0], B[2][0]]
    | [B[0][1], B[1][1], B[2][1]]
    | [B[0][2], B[1][2], B[2][2]] ? FormatWonner<'❌'>
    : WonShape<'⭕'> extends
    | R1 | R2 | R3
    | [B[0][0], B[1][1], B[2][2]]
    | [B[0][2], B[1][1], B[2][0]]
    | [B[0][0], B[1][0], B[2][0]]
    | [B[0][1], B[1][1], B[2][1]]
    | [B[0][2], B[1][2], B[2][2]] ? FormatWonner<'⭕'>
    : 'The game continue.'
  )
  : never

type FormatWonner<T extends Chess> = `The wonner is ${T}!`




type NewGame = Board
type renderGame0 = RenderBoard<NewGame>

type step1 = SetChess<NewGame, 1, 1, '❌'>
type renderGame1 = RenderBoard<step1>
type status1 = CheckGameStatus<step1>

type step2 = SetChess<step1, 2, 1, '⭕'>
type renderGame2 = RenderBoard<step2>
type status2 = CheckGameStatus<step2>

type step3 = SetChess<step2, 1, 0, '❌'>
type renderGame3 = RenderBoard<step3>
type status3 = CheckGameStatus<step3>

type step4 = SetChess<step3, 1, 2, '⭕'>
type renderGame4 = RenderBoard<step4>
type status4 = CheckGameStatus<step4>

type step5 = SetChess<step4, 2, 0, '❌'>
type renderGame5 = RenderBoard<step5>
type status5 = CheckGameStatus<step5>

type step6 = SetChess<step5, 0, 0, '⭕'>
type renderGame6 = RenderBoard<step6>
type status6 = CheckGameStatus<step6>

type step7 = SetChess<step6, 0, 2, '❌'>
type renderGame7 = RenderBoard<step7>
type status7 = CheckGameStatus<step7>


type NewGame2 = Board
type step01 = SetChess<NewGame2, 1, 1, '⭕'>
type step02 = SetChess<step01, 1, 2, '⭕'>
type step03 = SetChess<step02, 1, 0, '⭕'>
type renderGame02 = RenderBoard<step03>
type status44 = CheckGameStatus<step03> // "The wonner is ⭕!"