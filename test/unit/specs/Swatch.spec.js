import { mount } from 'avoriaz';
import Swatch from '@/components/Swatch';

const wrapper = mount(Swatch, {
  propsData: {
    color: '#2D2D2D',
  },
});

describe('Swatch.vue', () => {
  it('should render a color box', () => {
    expect(wrapper.contains('.hex__block'))
    .to.equal(true);
  });

  it('should color the swatch box correctly', () => {
    const div = wrapper.find('.hex__name')[0];
    expect(div.text())
    .to.equal('#2d2d2d');
  });

  it('should make the hex value lowercase', () => {
    const div = wrapper.find('.hex__name')[0];
    expect(div.text())
    .to.equal('#2d2d2d'.toLowerCase());
  });
});
