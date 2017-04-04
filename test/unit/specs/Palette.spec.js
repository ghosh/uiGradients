import { mount } from 'avoriaz';
import Palette from '@/components/Palette';


const clickHandler = sinon.stub();

const wrapper = mount(Palette, {
  propsData: {
    direction: 'to left',
    gradient: {
      colors: ['#1FA2FF', '#21DCF6', '#A6FFCB'],
      name: 'Stripe',
    },
    palletes: ['Cyans', 'Cyans', 'Greens'],
    updateGradient: clickHandler,
  },
});

describe('Palette.vue', () => {
  it('should have a class name of .palette__gradient', () => {
    expect(wrapper.is('.palette__gradient'))
    .to.equal(true);
  });

  it('should render the gradient name', () => {
    expect(wrapper.contains('.palette__name')).to.equal(true);
    expect(wrapper.text()).to.equal('Stripe');
  });

  it('should have a gradient as background style', () => {
    expect(wrapper.hasStyle('background', 'linear-gradient(to left, #1FA2FF,#21DCF6,#A6FFCB)'))
    .to.equal(true);
  });

  it('should call updateGradient method when clicked', () => {
    wrapper.simulate('click');
    expect(clickHandler.called).to.equal(true);
  });
});
