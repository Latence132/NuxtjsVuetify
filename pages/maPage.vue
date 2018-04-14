<template>
 <div>
  <div>
    <div>Ma navigation de blog est ici</div>
    <div>
    <v-alert type="success" :value="true">
      This is a success alert.
    </v-alert>

    <v-alert type="info" :value="true">
      This is a info alert.
    </v-alert>

    <v-alert type="warning" :value="true">
      This is a warning alert.
    </v-alert>

    <v-alert type="error" :value="true">
      This is a error alert.
    </v-alert>
  </div>
 
  </div>
  
   <div>
    <v-alert type="success" dismissible v-model="alert">
      This is a success alert that is closable.
    </v-alert>

    <div class="text-xs-center">
      <v-btn color="primary" dark v-if="!alert" @click="alert = true">Reset</v-btn>
    </div>
  </div>
  


</div> 
</template>


<script>
  export default {
    data () {
      return {
        alert: true
      }
    }
  }
</script>