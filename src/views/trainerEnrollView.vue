<template>
    <div id="trEnrollAll">
        <h1 id="trEnrollTitle">WELCOME</h1>
        <h2 id="trEnrollSubtitle">트레이너 등록</h2>
        <img src="" alt="">
        <div id="EnrollImgTray"></div>
        <div class="filebox">
            <label for="file">사진 등록</label> 
            <input type="file" id="file">
        </div>
        <label id="EnrollTrNameInput">이름 : </label>
        <span id="EnrollTrName">박종희</span>
        <label id="trEnrollCareer">경력</label>
        <input type="text" id="trEnrollCareerInput">
        <button id="trEnrollBtn">트레이너 등록</button>
        <span class="footer1">CodeCrafters</span>
        <span class="footer2">copyright(c) all rights Reserved</span>
    </div>
</template>


<script>
import "@/assets/trainerEnroll.css"
export default {
    name: "trainerEnrollView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>