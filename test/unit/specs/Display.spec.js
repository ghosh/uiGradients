import Gradients from '../../../gradients.json';

const findDuplicatesinArrayByKeyValue = (array, propertyName) => {
  let seenDuplicate = false;
  const testObject = {};
  const dupes = [];

  array.forEach((item) => {
    const itemPropertyName = item[propertyName];
    if (itemPropertyName in testObject) {
      dupes.push(itemPropertyName);
      testObject[itemPropertyName].duplicate = true;
      item.duplicate = true; // eslint-disable-line no-param-reassign
      seenDuplicate = true;
    } else {
      testObject[itemPropertyName] = item;
      delete item.duplicate; // eslint-disable-line no-param-reassign
    }
  });

  return seenDuplicate;
};


describe('Duplicate gradients', () => {
  it('Has no duplicate gradient names', () => {
    const dupes = findDuplicatesinArrayByKeyValue(Gradients, 'name');
    expect(dupes).to.equal(false);
  });
});
