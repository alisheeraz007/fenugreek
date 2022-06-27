import logo from './logo.svg';
import section1FormImage from './images/mock.png'
import Man from './images/man.png'

import faida from './images/faida.png'
import singleBottle from './images/two.png'
import { useState } from 'react';
import Axios from 'axios'


function Home() {

    let [name, setName] = useState("")
    let [phoneNo, setPhoneNo] = useState("")
    let [city, setCity] = useState("")
    let [address, setAddress] = useState("")

    const submitForm = () => {
        let data = new FormData()
        data.append("name", name)
        data.append("number", phoneNo)
        data.append("city", city)
        data.append("address", address)
        if (phoneNo.toString().length < 11) {
            document.getElementById("alertDiv").innerHTML = "Invalid Phone Number"
        } else {
            if (name && phoneNo && city && address) {
                document.getElementById("sendingButton1").innerHTML = "Sending Please Wait"
                document.getElementById("sendingButton2").innerHTML = "Sending Please Wait"
                Axios({
                    method: 'post',
                    url: 'https://glacial-refuge-73153.herokuapp.com/submitform',
                    // url: "http://localhost:5000/submitform/",
                    data,
                }).then((res) => {
                    setName("")
                    setPhoneNo("")
                    setAddress("")
                    setCity("")
                    document.getElementById("sendingButton1").innerHTML = "SEND"
                    document.getElementById("sendingButton2").innerHTML = "SEND"
                    window.location.href = "/thankyou"
                }).catch((err) => {
                    // console.log(err)
                });
            } else {
                document.getElementById("alertDiv").innerHTML = "All Fields Are Required"
            }
        }
    }

    return (
        <div className="App">
            <div className="section1">
                <div className="container">
                    <p>
                        شفائی نبوی نے کئی سالوں کی ریسرچ اور مختلف جڑی بوٹیوں کے استعمال سے تیار کیا ہے ایسا فارمولا جو مردانہ طاقت کے ساتھ ساتھ دیگر امراض میں بھی کار آمد ہے اور انتہائی طاقتور ہے۔
                    </p>
                    <div className="d-flex flex-wrap">
                        <div className="col-md-8 col-sm-12 imageSection">
                            <img style={{ marginBottom: 20 }} src={section1FormImage} />
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="formDiv">
                                <h2>اپنا آرڈر بک کروائیں</h2>
                                <h6>ڈلیوری چارجس 200 روپے</h6>
                                <div className="inputDiv">
                                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                                    <input value={phoneNo} type="number" onChange={(e) => {
                                        return (
                                            // console.log(e.target.value.toString().length)
                                            e.target.value.toString().length < 12 ? setPhoneNo(e.target.value) : ""
                                        )
                                    }} placeholder="Your mobile number" />
                                    <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Your city" />
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your address" />
                                    <input disabled value="1 Month Course Price 2999/-" />
                                    <button id="sendingButton1" onClick={submitForm}>SEND</button>
                                    <span id="alertDiv" className="alertDiv"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="container">
                    <h2>جذبہ کے فوائد</h2>
                    <div className="divider"></div>
                    <div className="d-flex faidaMain flex-wrap">
                        <div className="d-flex col-md-4 col-sm-12">
                            <div className="faida">
                                <img src="https://cdn-icons-png.flaticon.com/512/504/504030.png" />
                                <h3>جذبہ زیابیطس کو کنٹرول کرتا ہے</h3>
                            </div>
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/2.png" />
                                <h3>مردوں کی طاقت میں اضافہ کرتا ہے</h3>
                            </div>
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/1.png" />
                                <h3>جگر اور معدہ کی اصلاح کی صلاحیت رکھتا ہے</h3>
                            </div>
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/8.png" />
                                <h3>دل کے دورے اور دل کے امراض کو ختم کرتا ہے</h3>
                            </div>
                        </div>

                        <div className="d-flex col-md-4 col-sm-12">
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/9.png" />
                                <h3>جذبہ جسمانی اور جنسی طاقت کو بڑھا کر قوت مدافعت میں اضافہ کرتا ہے</h3>
                            </div>
                            <img className="centerMan" src={Man} />
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/4-1.png" />
                                <h3>کولیسٹرول کی سطح کوبڑھنے سے روکتا ہے</h3>
                            </div>
                        </div>

                        <div className="d-flex col-md-4 col-sm-12">
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/6.png" />
                                <h3>پوشیدہ امراض میں مبتلا افراد کیلئے انتہائی لا جوا ب ہے</h3>
                            </div>
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/3.png" />
                                <h3>جنسی کا کردگی میں اضافہ کرتا ہے</h3>
                            </div>
                            <div className="faida">
                                <img src="https://cdn1.iconfinder.com/data/icons/medical-equipment-supplies-3/380/Scale-512.png" />
                                <h3>جذبہ موٹاپا کنٹرول کرنے میں مدد فراہم کرتا ہے</h3>
                            </div>
                            <div className="faida">
                                <img src="https://safar-jal.com/wp-content/uploads/2020/06/5.png" />
                                <h3>پیشاب کی شکایت کو کم کرتاہے</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: "30px 0" }} className="section3">
                <div className="container">
                    <div style={{ alignItems: "center" }} className="d-flex flex-wrap">
                        <div className="col-md-6 col-sm-12 faidaPart">
                            <h3>جذبہ کی مردانہ طاقت کی خصوصیات</h3>
                            <ul>
                                <li>جریان کا خاتمہ اور ٹائمنگ کا غیر یقینی طور پر اضافہ</li>
                                <li>تولیدی جراثیم میں نہ صرف اضافہ کرتا ہے بلکے سپرم کی تعداد بھی بڑھاتا ہے</li>
                                <li>بچپن میں کی ہی غلطیاں، مشت زنی اور دیگر غلط کاریوں کی وجہ سے دبی ہوئی شریانوں کو علاج کرنے سے مردانہ طاقت اصلی حالت میں واپس آسکتی ہے
                                    جذبہ تمام پوشیدہ امراض کا واحد حل ہے</li>
                            </ul>
                        </div>
                        <div style={{ textAlign: "center" }} className="col-md-6 col-sm-12">
                            <img style={{ width: '60%' }} src={singleBottle} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="container">
                    <h2>اصلی لوگوں کے اصل نتائج</h2>
                    <div className="divider"></div>
                    <div className="d-flex reviewMain flex-wrap">
                        <div className="col-md-6 col-sm-12">
                            <div className="reviewDiv1 review">
                                <p>میں جسمانی اور اندرونی کمزوری میں مبتلا تھا کافی علاج کیا مگر خاص فائدہ نہ ہوا مگر جب سے جذبہ کا استعمال کیا ہے میں بہت بہتر محسوس کررہا ہو</p>
                                <h4>روحیل ڈار</h4>
                                <div className="d-flex iconDiv">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="review">
                                <p>میں کافی عرصے سے مردانہ مسائل کا شکار تھا کافی چیزیں استعمال کی لیکن کوئی فرق نہیں آیا - جذبہ کے استعمال سے میری اصل طاقت واپسی ہورہی ہے اور جذبہ کو میں نے سب میں بہتر پایا</p>
                                <h4>شرجیل احمد</h4>
                                <div className="d-flex iconDiv">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="review">
                                <p>پوشیدہ امراض کو بیان کرنا بہت مشکل کام ہے مگر میری مشکل جذبہ نے آسان کردی</p>
                                <h4>نجیب خان</h4>
                                <div className="d-flex iconDiv">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section1" style={{ background: "#e8f4f9" }}>
                <div className="container">
                    <div className="d-flex flex-wrap">

                        <div className="col-md-4 col-sm-12">
                            <div className="formDiv">
                                <h2>اپنا آرڈر بک کروائیں</h2>
                                <h6>ڈلیوری چارجس 200 روپے</h6>
                                <div className="inputDiv">
                                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                                    <input value={phoneNo} type="number" onChange={(e) => {
                                        return (
                                            // console.log(e.target.value.toString().length)
                                            e.target.value.toString().length < 12 ? setPhoneNo(e.target.value) : ""
                                        )
                                    }} placeholder="Your mobile number" />
                                    <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Your city" />
                                    <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your address" />
                                    <input disabled value="1 Month Course Price 2999/-" />
                                    <button onClick={submitForm} id="sendingButton2">SEND</button>
                                    <span id="alertDiv" className="alertDiv"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 imageSection">
                            <img style={{ marginBottom: 20 }} src={section1FormImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
