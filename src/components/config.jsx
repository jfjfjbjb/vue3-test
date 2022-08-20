export default function (ctx) {
    return {
        getJSX() {
            return <div>配置文件jsx{ctx.state.count}</div>
        }
    }
}