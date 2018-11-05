<template>
    <div class="main">
        <draggable id="list1" :list="list1" class="dragArea" :options="{group:{name:'people', pull:'clone', put:false }}" @change="log">
            <div class="item1" v-for="(element, index) in list1" :key="index">
                {{element.name}} {{index}}
            </div>
        </draggable>
        <h2>List 2 v-dragable-for</h2>
        <draggable id="list2" :list="list2" class="dragArea" :options="{group:'people'}" @change="log">
            <div class="item2" v-for="(element, index)  in list2" :key="index">{{element.name}}</div>
        </draggable>
        <h2>List 3 v-dragable-for</h2>
        <draggable id="list3" :list="list3" class="dragArea" :options="{group:'people'}" @change="log">
            <div class="item2" v-for="(element, index)  in list2" :key="index">{{element.name}}</div>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    data() {
        return{
            list1: [{ name: "二", id: 1 },
                { name: "热水", id: 2 },
                { name: "让他", id: 3 },
                { name: "维恩", id: 4 }
            ],
            list2: [{ name: "Juan", id: 5 },
                { name: "Edgard", id: 6 },
                { name: "Johnson", id: 7 }
            ],
            list3: [{ name: "阿斯达", id: 8 },
                { name: "还是", id: 9 },
                { name: "水电费", id: 10 }
            ]
        }
    },
    methods: {
        add: function() {
            this.list.push({ name: 'aaaaa' });
        },
        replace: function() {
            this.list = [{ name: 'BBBBBB' }]
        },
        clone: function(el) {
            return {
                name: el.name + ' cloned'
            }
        },
        log: function(evt) {
            console.log(evt)
        }
    },
    components:{
      draggable
    }

}
</script>
<style>
.item1 {
    background: green;
    color: #fff;
    margin: 10px;
    width: 300px;
    font-size: 18px;
    line-height: 30px;
}
.item2 {
    background: red;
    color: #fff;
    margin: 10px;
    width: 300px;
    font-size: 18px;
    line-height: 30px;
}
</style>