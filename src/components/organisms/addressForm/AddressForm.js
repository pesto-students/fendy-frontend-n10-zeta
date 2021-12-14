import Form from '../../atoms/form'
import LabelInput from '../../molecules/labelInput';
import Button, { BUTTON_SIZES } from '../../atoms/button';
import {Row,Col} from '../../atoms/grid';
import styles from './addressForm.module.css';
const AddressForm = () => {
    return(
        <div className={styles.formContainer}>
            <Form layout='vertical'>
                <Row gutter={12}>
                   <Col span={12}>
                        <LabelInput size='large' label="Line 1" name="Line1" type="text"/>
                   </Col> 
                   <Col span={12}>
                        <LabelInput size='large' label="Line 2" name="Line2" type="text"/>
                   </Col> 
                </Row>
                <Row gutter={12}>
                    <Col span={8}>
                        <LabelInput size='large' label="Name" name="Name" type="text"/>
                    </Col>
                    <Col span={8}>
                        <LabelInput size='large' label="City" name="city" type="text"/>
                    </Col>
                    <Col span={8}>
                        <LabelInput size='large' label="state" name="state" type="text"/>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={12}>
                        <LabelInput size='large' label="Mobile No" name="mobile" type="number"/>
                    </Col>
                    <Col span={12}>
                        <LabelInput size='large' label="Pin Code" name="pincode" type="number"/>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col offset={11}>
                    <Button size={BUTTON_SIZES.LARGE} label='Add Address'/>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AddressForm;