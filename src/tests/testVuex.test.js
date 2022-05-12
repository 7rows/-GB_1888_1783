import regeneratorRuntime from "regenerator-runtime";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import TestVuexComponent from "../components/TestVuexComponent.vue";
import Vuex from 'vuex'


const LocalVue = createLocalVue()
LocalVue.use(Vuex)

describe('Test Vuex', ()=>{
  let actions
  let store

  beforeEach(()=>{
    actions = {
      addData: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        data: ''
    },
      actions
    })
  })

  it('run action onSave', ()=>{
    const wrapper = shallowMount(TestVuexComponent,{
      store,
      LocalVue
    })
    const input = wrapper.find('input')
    input.setValue('123')
    const btn = wrapper.find('button')
    btn.trigger('click')

    expect(actions.addData).toHaveBeenCalled()

  })

})