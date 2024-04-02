<template>
    <div id="MemberListAll">
        <h1 id="MemberListTitle1">MEMBER</h1>
        <h1 id="MemberListTitle2">LIST</h1>
        <table id="postTable">
            <thead id="postTableHead">
                <tr class="TableHead">성함</tr>
                <tr class="TableHead">PT 잔여횟수</tr>
                <tr class="TableHead">강사</tr>
            </thead>
            <tbody id="postTableBody">
                <tr>이름</tr>
                <tr>0회</tr>
                <tr>강사이름</tr>
            </tbody>
        </table>
        <input type="text" id="postSearch">
        <button id="postMoreBtn">게시글 10개 더보기</button>
        <span class="footer1">CodeCrafters</span>
        <span class="footer2">copyrights(c) all rights Reserved</span>
    </div>
</template>


<script>
import "@/assets/MemberList.css"
export default {
    name: "MemberListView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>