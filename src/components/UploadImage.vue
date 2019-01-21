<template>
  <div class="upload">
    <div class="upload_warp">
      <div class="upload_warp_left" @click="fileClick">
        <img src="../assets/images/upload.png">
      </div>
      <div class="upload_warp_right" @drop="drop($event)" @dragenter="dragenter($event)" @dragover="dragover($event)">
        或者将文件拖到此处
      </div>
    </div>
    <div class="upload_warp_text">
      选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}
    </div>
    <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
    <div class="upload_warp_img" v-show="imgList.length!=0">
      <div class="upload_warp_img_div" v-for="(item,index) of imgList">
        <div class="upload_warp_img_div_top">
          <div class="upload_warp_img_div_text">
            {{item.file.name}}
          </div>
          <img src="../assets/images/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
        </div>
        <img :src="item.file.src">
      </div>
    </div>
    <input type="button" @click="getIamVal" value="获取">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList: [],
        size: 0
      }
    },
    methods: {
      fileClick() {
        document.getElementById('upload_file').click()
      },
      fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          //判断是否为文件夹
          if (files[i].type !== '') {
            this.fileAdd(files[i]);
          } else {
            //文件夹处理
            this.folders(fileList.items[i]);
          }
        }
      },
      //文件夹处理
      folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
          files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
          for (let i = 0; i < file.length; i++) {
            if (file[i].isFile) {
              _this.foldersAdd(file[i]);
            } else {
              _this.folders(file[i]);
            }
          }
        })
      },
      foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
          _this.fileAdd(file)
        })
      },
      fileAdd(file) {
        //总大小
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') === -1) {
          file.src = '../assets/images/upload.png';
          this.imgList.push({
            file
          });
        } else {
          let reader = new FileReader();
          reader.vue = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            this.vue.imgList.push({
              file
            });
          }
        }
      },
      fileDel(index) {
        this.size = this.size - this.imgList[index].file.size;//总大小
        this.imgList.splice(index, 1);
      },
      bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        let k = 1000, // or 1024
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      },
      dragenter(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      dragover(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      drop(el) {
        el.stopPropagation();
        el.preventDefault();
        this.fileList(el.dataTransfer);
      },
      getIamVal(){
        console.log(this.imgList)
        for(var i=0;i<this.imgList.length;i++){
          console.log('---------------------------')
          console.log(this.imgList[i].file.src)
          console.log('---------------------------')
        }
      }
    }
  }
</script>

<style scoped lang="less">
  
</style>
