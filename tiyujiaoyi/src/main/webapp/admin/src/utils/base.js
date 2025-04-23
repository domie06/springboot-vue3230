const base = {
    get() {
        return {
            url : "http://localhost:8080/tiyujiaoyi/",
            name: "tiyujiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tiyujiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "体育用品交易网站"
        } 
    }
}
export default base
