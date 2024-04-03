<template>
    <div id="manager">
        <div id="head">
            <h1>Fitness On</h1>
            <h2>관리자 페이지</h2>
        </div>
        <!--헤더-->
        <div class="clearfix">
            <div id="minfo">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>이름</td>
                                <td>번호</td>
                                <td>등록월수</td>
                                <td>등록상태</td>
                                <td>만료일</td>
                                <td>라커번호</td>
                                <td>pt강사</td>
                                <td>등록횟수</td>
                                <td>잔여횟수</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-bind:key="i" v-for="(v, i) in managerVo1">
                                <td>
                                    <RouterLink>{{ v.name }}</RouterLink>
                                </td>
                                <td>{{ v.hp }}</td>
                                <td>{{ v.period }}개월</td>
                                <td>{{ v.approval }}</td>
                                <td>{{ v.deadline }}</td>
                                <td>{{ v.lockerNo }}</td>
                                <td>{{ v.tName }}</td>
                                <td>{{ v.ptTotal }}</td>
                                <td>{{ v.ptCount }}</td>
                            </tr>
                            <tr>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                            </tr>
                            <tr>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                            </tr>
                            <tr>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                            </tr>
                            <tr>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                            </tr>
                            <tr>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                            </tr>
                            <tr>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                                <td>어쩌고</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="paging">
                    <ul>
                        <li v-bind:key="i" v-for="(e, i) in endNo">
                            <a v-on:click.prevent="list(i + 1)" href="">{{ i + 1 }}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import "@/assets/ManagerSite.css"
export default {
    name: "ManagerView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>