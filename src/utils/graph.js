export class Graph {
  points = []; // 点集，存储高度
  arc = []; // 邻接矩阵
  POINTS_NUMBER = 0; // 点数
  EDGES_NUMBER = 0; // 边数

  visited = [];

  constructor(points, arc, pointsNumber, edgesNumber) {
    this.POINTS_NUMBER = pointsNumber;
    this.EDGES_NUMBER = edgesNumber;
    for (let i = 0; i < this.POINTS_NUMBER; i++) {
      this.points[i] = { val: points[i], id: i };
    }
    for (let i = 0; i < this.POINTS_NUMBER; i++) {
      this.arc[i] = [];
      for (let j = 0; j < this.POINTS_NUMBER; j++) {
        this.arc[i].push(arc[i][j]);
      }
    }
  }

  bfs(id) {
    let queue = []; //初始化队列
    const res = [];
    for (let i = 0; i < this.POINTS_NUMBER; i++) {
      this.visited[i] = false;
    }
    // 以下标为id的节点为根，向下寻找
    this.visited[id] = true;
    queue.push(id);
    while (queue.length !== 0) {
      //当前队列不为空
      const i = queue.shift(); // 当前节点的下标
      for (let j = 0; j < this.POINTS_NUMBER; j++) {
        //判断其他顶点若与当前顶点存在边 && 其他顶点比当前顶点的值小 && 未访问过
        if (
          this.arc[i][j] === 1 &&
          this.points[i].val > this.points[j].val &&
          !this.visited[j]
        ) {
          this.visited[j] = true;
          // 对顶点j：
          // 如果该顶点属于id节点的子树，把该轮廓树的子树节点加入res（深度更小）
          // 并且讲j节点加入子树
          if (this.points[j].val < this.points[id].val) {
            res.push([i, j]);
            queue.push(j); //将此顶点放入队列
          }
        }
      }
    }

    return res;
  }
}
