export default function (ctx) {
  return {
    getJSX(h) {
      console.log(ctx.tempFunc());
      return <div>配置文件jsx{ctx.state.count}</div>;
    }
  };
}
