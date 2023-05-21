<template>
  <div id="MessageRow">
    <div
      class="border-b hover:border-gray-200 hover:border-t hover:border-y-2 hover:border-x cursor-pointer"
      :class="[hasViewed ? 'bg-gray-100' : '']"
    >
      <div class="flex items-center px-4 py-2">
        <div class="flex items-center">
          <component 
            :is="isSelected ? CheckboxMarkedOutline : CheckboxBlankOutline" 
            @click="isSelected = !isSelected"
            :size="19" 
            fillColor="#636363"
          />
          <StarOutline 
            :size="19"
            fillColor="#636363"
            class="ml-4"  
          />
        </div>

        <div class="flex items-center w-full">
          <router-link :to="`email/message/${id}`" class="w-full">
            <div class="flex items-center justify-between">
              <div class="flex items-center w-full">
                <div class="text-sm ml-4 font-semibold truncate-from">
                  {{ from }}
                </div>
                <div class="flex items-center justify-between ">
            
                <div class="text-sm mr-1.5 font-semibold truncate-subject">
                  {{ subject }}
                </div>
                <div class="text-sm mr-1.5 font-semibold text-gray-500 truncate-body">
                  {{ body }}
                </div>
                </div>

              </div>
              <div class="text-right truncate mr-4 w-full text-xs font-semibold">
                {{ time }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps, defineEmits, ref, watch} from 'vue'
import CheckboxMarkedOutline from 'vue-material-design-icons/CheckboxMarkedOutline.vue'
import CheckboxBlankOutline from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import StarOutline from 'vue-material-design-icons/StarOutline.vue'

const emit = defineEmits('selectedId')
let isSelected = ref(false)

const props = defineProps({
  id: String,
  from: String,
  subject: String,
  body: String, 
  time: String,
  hasViewed: Boolean,
})
const {id, from, subject, body, time, hasViewed} = toRefs(props)

watch(isSelected, (bool) => {
  emit('selectedId', {id: id.value, bool: bool})
})
</script>

<style lang="scss">
  #MessageRow{
    .truncate-from {
      width: 170px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .truncate-subject {
      max-width: 200px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .truncate-body {
      max-width: 400px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

  }
</style>