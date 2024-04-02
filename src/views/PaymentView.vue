<template>
    <div id="payAll">
        <h1 id="payTitle">PAYMENT</h1>
        <h2 id="paySubTitle">이용권 및 PT결제</h2>
        <div id="payInfo">
            <ul id="payList">
                <li class="payList1">결제할 이용권</li> 
                <span class="payInfo1">1개월 이용권</span>
                <li class="payList2">가격</li> 
                <span class="payInfo2">110,000 원</span>
                <li class="payList3">회원권 만료일</li> 
                <span class="payInfo3"> 2024-05-01</span>
            </ul>
        </div>
        <div>
            <input type="checkbox" class="payCheckbox1">
            <label id="check1">개인정보 처리방침에 동의합니다.</label> 
        </div>
        <div>
            <input type="checkbox" class="payCheckbox2">
            <label id="check2">청약철회 약관에 동의합니다.</label>
        </div>
        <button id="payBtn">결제 요청하기</button>
        <div class="footer1">CodeCrafters</div>
        <div class="footer2">copyright (c) all rights Reserved.</div>
    </div>
</template>


<script>
import "@/assets/payment.css"
export default {
    name: "PaymentView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
