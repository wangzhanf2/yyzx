<template>
    <el-row>
        <el-col :span="24">
            <h2>床位示意图</h2>
        </el-col>
        <el-col :span="8" :xs="24">
            楼层：<el-select v-model="floorNum" placeholder="请选择楼层" @change="handlerChange">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-col>
        <el-col :md="4" :sm="24">
            <img src="/image/jhnlc.png" /> 总床位： {{ totalBeds }}
        </el-col>
        <el-col :md="4" :sm="24">
            <img src="/image/kx.png" /> 空闲： {{ freeBeds }}
        </el-col>
        <el-col :md="4" :sm="24">
            <img src="/image/lc.png" /> 有人： {{ occupiedBeds }}
        </el-col>
        <el-col :md="4" :sm="24">
            <img src="/image/wc.png" /> 外出： {{ outBeds }}
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24" v-for="floor in resultList" :key="floor.floorNo">
            <el-card class="box-card">
                <el-row>
                    <el-col :span="24">{{ floor.floorNo }}层
                        <hr />
                    </el-col>

                </el-row>
                <el-row>
                    <el-col v-for="room in floor.roomList" :key="room.roomNo" :xs="12" :sm="8" :md="4" :lg="3" :xl="2">
                        <el-row>
                            <el-card class="box-card">
                                <el-col>
                                    {{ room.roomNo }}
                                    <hr />
                                </el-col>

                                <el-col v-for="bed in room.bedList" :key="bed.bedNo">

                                    <div>
                                        <img :src="bed.bedStatus === 0 ? '/image/kx.png' :
                                            bed.bedStatus === 1 ? '/image/lc.png' :
                                                '/image/wc.png'
                                            " alt="床位状态" />
                                    </div>
                                    <div class="clearfix">
                                        <span>{{ room.roomNo }}-{{ bed.bedNo }}</span>
                                    </div>


                                </el-col>
                            </el-card>
                        </el-row>
                    </el-col>


                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'BedList',
    data() {
        return {
            // 这里可以定义一些用户相关的数据
            options: [
                {
                    value: 0,
                    label: '所有楼层',
                },
                {
                    value: 1,
                    label: '1楼',
                },
                {
                    value: 2,
                    label: '2楼',
                }
            ],
            floorNum: 1,
            resultList: [],
            summaryList: [
                {
                    floorNo: 1,
                    roomList: [
                        {
                            roomNo: 1001,
                            bedList: [
                                {
                                    bedNo: 1,
                                    bedStatus: 0
                                },
                                {
                                    bedNo: 2,
                                    bedStatus: 1
                                }
                            ]
                        },
                        {
                            roomNo: 1002,
                            bedList: [
                                {
                                    bedNo: 1,
                                    bedStatus: 1
                                },
                                {
                                    bedNo: 2,
                                    bedStatus: 2
                                }
                            ]
                        },
                        {
                            roomNo: 1003,
                            bedList: [
                                {
                                    bedNo: 1,
                                    bedStatus: 0
                                },
                                {
                                    bedNo: 2,
                                    bedStatus: 2
                                }
                            ]
                        }
                    ]
                }, {
                    floorNo: 2,
                    roomList: [
                        {
                            roomNo: 2001,
                            bedList: [
                                {
                                    bedNo: 1,
                                    bedStatus: 1    //0表示空闲，1表示有人，2表示外出
                                },
                                {
                                    bedNo: 2,
                                    bedStatus: 1
                                }
                            ]
                        },
                        {
                            roomNo: 2002,
                            bedList: [
                                {
                                    bedNo: 1,
                                    bedStatus: 0
                                },
                                {
                                    bedNo: 2,
                                    bedStatus: 1
                                }
                            ]
                        },
                        {
                            roomNo: 2003,
                            bedList: [
                                {
                                    bedNo: 1,
                                    bedStatus: 1
                                },
                                {
                                    bedNo: 2,
                                    bedStatus: 2
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        // 这里可以定义一些用户相关的方法  
        handlerChange(value) {
            console.log('选择的楼层:', value, typeof value);
            // 根据选择的楼层进行相应的处理，例如过滤数据等
            if (value == 0) {
                this.resultList = this.summaryList; // 显示所有楼层的数据
            } else {
                this.resultList = this.summaryList.filter(item => item.floorNo == value); // 显示选定楼层的数据
                //this.resultList = this.summaryList.filter(item => item.floorNo == value);
            }
        }

    },
    mounted() {
        // 这里可以执行一些初始化操作，例如获取用户信息等
        this.resultList = this.summaryList.filter(item => item.floorNo == this.floorNum);
    },
    computed: {
        totalBeds() {
            return this.resultList.reduce((total, floor) => {
                return total + floor.roomList.reduce((roomTotal, room) => {
                    return roomTotal + room.bedList.length;
                }, 0);
            }, 0);
        },
        freeBeds() {
            return this.resultList.reduce((total, floor) => {
                return total + floor.roomList.reduce((roomTotal, room) => {
                    return roomTotal + room.bedList.filter(bed => bed.bedStatus === 0).length;
                }, 0);
            }, 0);
        },
        occupiedBeds() {
            return this.resultList.reduce((total, floor) => {
                return total + floor.roomList.reduce((roomTotal, room) => {
                    return roomTotal + room.bedList.filter(bed => bed.bedStatus === 1).length;
                }, 0);
            }, 0);
        },
        outBeds() {
            return this.resultList.reduce((total, floor) => {
                return total + floor.roomList.reduce((roomTotal, room) => {
                    return roomTotal + room.bedList.filter(bed => bed.bedStatus === 2).length;
                }, 0);
            }, 0);
        }
    }
}
</script>
<style></style>