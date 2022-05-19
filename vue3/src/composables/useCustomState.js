import { computed, ref} from 'vue'

const isStateRady = ref(false)
export const useCustomState = ()=>{
  const init = async()=> {
    console.log('init');
    return Promise.resolve(true)
  }

  const run = ()=> {
    setTimeout(()=>{
      isStateRady.value = true
    }, 3000)
  }

  const hubState = computed(()=>{
    return `${isStateRady.value} - status`
  })
  
  return {
    init,
    run,
    hubState,
    isStateRady
  }
}