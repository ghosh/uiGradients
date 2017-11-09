import { mount } from 'avoriaz';
import Display from '@/components/Display';

const wrapper = mount(Display, {
  propsData: {
    direction: 'to left',
    gradient: {
      colors: ['#1FA2FF', '#21DCF6', '#A6FFCB'],
      name: 'Stripe',
    },
  },
});

describe('Display.vue', () => {
  it('It renders element correctly', () => {
    expect(wrapper.is('.display')).to.equal(true);
  });

  it('should have a gradient as background style', () => {
    expect(wrapper.hasStyle('background', 'linear-gradient(to left, #1FA2FF,#21DCF6,#A6FFCB)'))
      .to.equal(true);
  });
});
