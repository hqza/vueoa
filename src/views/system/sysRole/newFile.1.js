export default (await import('vue')).defineComponent({
// 定义数据模型
data() {
return {
list: [],
page: 1,
limit: 10,
total: 1,
searchObj: {}
};
},
// 页面渲染成功后获取数据
created() {
this.fetchData();
},
// 定义方法
methods: {
fetchData() {
}
}
});
