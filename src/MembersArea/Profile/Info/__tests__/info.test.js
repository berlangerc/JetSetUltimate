import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Formik } from 'formik';

import Info from '../Info';
// import LabelInput from '../../../../components/Form/LabelInput/LabelInput';
import InfoForm, { InfoInnerForm } from '../InfoForm';
import InputField from '../../../../components/Form/InputField/InputField';

const mockStore = configureStore();
const emptyStore = mockStore();

const findLabelInputWithName = (rw, name) => {
    return findInputWithName(rw, 'LabelInput', name);
}

const findInputWithName = (rw, componentName, name) => {
    return rw.findWhere(n => { return n.name() === componentName && n.prop('name') === name });
}


describe('INFO Component', () => {
    let wrapper;

    beforeEach(() => {
        emptyStore.clearActions();
    });

    describe('Basic component testing', () => {
        beforeEach(() => { // Runs before each test in the suite
            wrapper = shallow(<Info store={emptyStore} />).dive();
        });

        test('renders without crashing', () => {
            shallow(<Info store={emptyStore} />);
        });

        test('should render a <div />', () => {
            expect(wrapper.find('div').length).toEqual(1);
        });

        test('should render the InfoForm Component', () => {
            expect(wrapper.contains(<InfoForm />)).toEqual(true);
        });
    });

    describe('Form testing', () => {
        let infoFormComponent;

        describe('Structure', () => {
            beforeAll(() => {
                wrapper = mount(<Info store={emptyStore} />);
                infoFormComponent = wrapper.find('form');
            });

            afterAll(() => {
                wrapper.unmount();
            })

            test('InfoForm component has a form', () => {
                expect(wrapper).toContainMatchingElement("form");
            });

            test('then email input field is disabled', () => {
                const emailInput = findLabelInputWithName(wrapper, 'email');
                expect(emailInput.prop('disabled')).toBeTruthy();
            });
        });

        describe('When I have no data in userProfile', () => {
            beforeEach(() => {
                wrapper = mount(<Info store={emptyStore} />);
            });

            afterEach(() => {
                wrapper.unmount();
            })

            const noValueTest = (inputName, wrapper) => {
                const inputTest = findLabelInputWithName(wrapper, inputName);
                expect(inputTest.prop('value')).toEqual('');
            }

            test('then firstName has no value', () => {
                noValueTest('firstName', wrapper);
            });

            test('then lastName has no value', () => {
                noValueTest('lastName', wrapper);

            });

            test('then email has no value', () => {
                noValueTest('email', wrapper);
            });

            test('then telephone has no value', () => {
                const telephoneInput = findInputWithName(wrapper, 'PhoneInput', 'phone');
                expect(telephoneInput.prop('value')).toEqual('');
            });

            test('then the streetName has no value', () => {
                noValueTest('streetName', wrapper);
            });
            test('then the number has no value', () => {
                noValueTest('number', wrapper);
            });
            test('then the postalcode has no value', () => {
                noValueTest('postalcode', wrapper);
            });
            test('then the city has no value', () => {
                noValueTest('city', wrapper);
            });

        });

        describe('When I intract with the input fields', () => {
            testInputChangeAndBlur('firstName', wrapper);
            testInputChangeAndBlur('lastName', wrapper);
            // testInputChangeAndBlur('email', wrapper);
            testInputChangeAndBlur('streetName', wrapper);
            testInputChangeAndBlur('number', wrapper);
            testInputChangeAndBlur('postalcode', wrapper);
            testInputChangeAndBlur('city', wrapper);
        });
    });


});


function testInputChangeAndBlur(inputName) {
    let infoFormComponent;
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Info store={emptyStore} />);
    });

    afterEach(() => {
        wrapper.unmount();
    });
    describe(inputName + ' - onChange and onBlur', () => {
        describe('and I change the value of ' + inputName, () => {
            beforeEach(async () => {
                infoFormComponent = wrapper.find(InfoForm);

                await findLabelInputWithName(wrapper, inputName)
                    .find('input')
                    .simulate('change', {
                        persist: () => { },
                        target: {
                            name: inputName,
                            value: 'Cedric',
                        },
                    });
            });


            test('then the input field should have a value prop with the given value', () => {
                expect(
                    findLabelInputWithName(wrapper, inputName)
                        .props()
                        .value
                ).toEqual('Cedric')
            });

            test('then innerform has a value for the inputfield', () => {
                expect(
                    wrapper.find(InfoInnerForm)
                        .props().values[inputName]
                ).toEqual('Cedric');
            });

        });

        describe('and I blur the inputfield', () => {

            beforeEach(async () => {
                infoFormComponent = wrapper.find(InfoForm);

                await findLabelInputWithName(infoFormComponent, inputName)
                    .find('input')
                    .simulate('blur', {
                        persist: () => { },
                        target: {
                            name: inputName,
                        },
                    });
            });

            test('then the input field is touched', () => {
                expect(
                    findLabelInputWithName(wrapper.update(), inputName)
                        .props()
                        .touched
                ).toEqual(true)
            });

            test('then the input is touched', () => {
                expect(
                    wrapper.find(InfoInnerForm)
                        .props()
                        .touched[inputName]
                ).toEqual(true);
            });

            test('then the input has no value', () => {
                expect(
                    wrapper.find(InfoInnerForm)
                        .props()
                        .values[inputName]
                ).toEqual("");
            });

            test('then the input has an error', (done) => {
                wrapper.update();

                expect(
                    wrapper.find(InfoInnerForm)
                        .props()
                        .errors[inputName]
                ).not.toBeNull();
                done();

            });


        });
    })

}