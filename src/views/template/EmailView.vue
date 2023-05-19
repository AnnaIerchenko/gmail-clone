<template>
  <div id="EmailView" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
      <div class="logo-section flex justify-start items-center px-3.5">
        <IconComponent
          iconString="menu"
          iconColor="#636363"
          :iconSize="19"
          hoverColor="hover:bg-gray-200"
          text="Main menu"
          class="-ml-2 mr-2"
        />

        <img width="107" src="../../../public/img/GmailLogo.png" alt="logo">
      </div>
      <div class="flex w-full justify-between">
        <div class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
          <IconComponent 
            iconString="magnify"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Search"   
          />
          <input 
            placeholder="Search mail"
            class="w-full h-10 bg-gray-200 border-transparent border-none focus:ring-0 outline-none placeholder-gray-900"
            type="text"
          />
          <IconComponent 
            iconString="tune"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Show search options"   
          />
        </div>
        <div class="flex w-32 justify-between items-center ml-6">
          <IconComponent 
            iconString="cog"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Settings"   
          />
          <IconComponent 
            iconString="apps"
            iconColor="#636363"
            :iconSize="19"
            hoverColor="hover:bg-gray-200"
            text="Google Apps"   
          />

          <UserComponent />
        </div>
      </div>
    </div>
    <div class="flex w-full justify-between">
      <div id="SideMenu" class="side-menu">
        <div class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 p-7 cursor-pointer"
        >
        <PencilOutline :size="25" class="mr-4"/>
        <span class="sm">Compose</span>
        </div>
        <div class="my-5"></div>

        <div class="side-menu-item flex justify-between px-6 py-1.5 bg-blue-100 rounded-r-full">
          <div class="flex items-center">
            <Inbox :size="17"/>
            <div class="text-sm pl-4 font-semibold">
              Inbox
            </div>
          </div>
          <div class="text-xs font-semibold">
            26
          </div>
        </div>

        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <StarOutline :size="17"/>
            <div class="text-sm pl-4">Starred</div>
          </div>
        </div>

        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <ClockOutline :size="17"/>
            <div class="text-sm pl-4">Snoozed</div>
          </div>
        </div>

        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <SendOutline :size="17"/>
            <div class="text-sm pl-4">Send</div>
          </div>
        </div>

        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <FileOutline :size="17"/>
            <div class="text-sm pl-4">Drafts</div>
          </div>
        </div>
      </div>

      <!-- here page chage -->
      <router-view />
       <!-- here page chage -->
      <div class="m-4">
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleCalandar.png" alt="">
        </div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleKeep.png" alt="">
        </div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleTasks.png" alt="">
        </div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleContacts.png" alt="">
        </div>

        <div class="w-6 flex mb-7 border border-gray-300"></div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <Plus />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconComponent from '@/components/IconComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import Inbox from 'vue-material-design-icons/Inbox.vue'
import StarOutline from 'vue-material-design-icons/StarOutline.vue'
import ClockOutline from 'vue-material-design-icons/ClockOutline.vue'
import SendOutline from 'vue-material-design-icons/SendOutline.vue'
import FileOutline from 'vue-material-design-icons/FileOutline.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
</script>

<style lang="scss">
  #EmailView {
    .logo-section {
      min-width: 250px; 
    }
    .input-width {
      max-width: 700px;
    }
    .side-menu {
      width: 300px;
    }
    .side-menu-item {
      width: 250px;
    }
  }
</style>