import { mount } from 'avoriaz';
import Topbar from '@/components/Topbar';

const wrapper = mount(Topbar);

describe('Topbar.vue', () => {
  it('renders child elements correctly', () => {
    expect(wrapper.contains('.header__logo')).to.equal(true);
    expect(wrapper.contains('.header__social')).to.equal(true);
  });
});
