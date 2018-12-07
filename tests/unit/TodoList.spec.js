import Vue from 'vue';
import TodoList from '@/components/TodoList.vue';
jest.mock('axios');

function mountComponentWithProps (Component, propsData) {
	const Constructor = Vue.extend(Component);
	const vm = new Constructor({
		propsData
	}).$mount();

	return vm.$el;
}
