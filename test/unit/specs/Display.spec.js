import Gradients from '../../../gradients.json';

const findDuplicatesinArrayByKeyValue = (array, propertyName) => {
	let seenDuplicate = false;
	let	testObject = {};
	let dupes = [];

	array.map((item) => {
		var itemPropertyName = item[propertyName];
		if (itemPropertyName in testObject) {
			dupes.push(itemPropertyName);
			testObject[itemPropertyName].duplicate = true;
			item.duplicate = true;
			seenDuplicate = true;
		}
		else {
			testObject[itemPropertyName] = item;
			delete item.duplicate;
		}
	})

	return seenDuplicate;
}


describe('Duplicate gradients', () => {
  it('Has no duplicate gradient names', () => {
    const dupes = findDuplicatesinArrayByKeyValue(Gradients, 'name');
    expect(dupes).to.equal(false);
  });
});
