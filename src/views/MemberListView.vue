<template>
    <div id="MemberListAll">
        <h1 id="MemberListTitle1">MEMBER</h1>
        <h1 id="MemberListTitle2">LIST</h1>

        <div id="postInfoAll">
            <table id="postTable">
                <colgroup>
                    <col style="width: 27%;">
                    <col style="width: 46%;">
                    <col style="width: 27%;">
                </colgroup>
                <thead id="postTableHead">
                    <tr>
                        <th class="postTableHeadData">성함</th>
                        <th class="postTableHeadData">PT 잔여횟수</th>
                        <th class="postTableHeadData">강사</th>
                    </tr>
                </thead>
                <tbody id="postTableBody">
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>
                    <tr>
                        <td class="postTableBodyData">이름</td>
                        <td class="postTableBodyData">횟수</td>
                        <td class="postTableBodyData">이름</td>
                    </tr>

                </tbody>
            </table>
            <input type="text" id="postSearch" placeholder="검색">
            <ol id="memberList">
                <li class="li">이전</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>다음</li>
            </ol>
            
        </div>
        
        <span class="listfooter1">CodeCrafters</span>
        <span class="listfooter2">copyrights(c) all rights Reserved</span>
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