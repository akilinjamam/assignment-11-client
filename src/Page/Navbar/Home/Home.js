import React from 'react';
import { Carousel } from 'react-bootstrap';
import v1 from '../../../banner/tesla.jpg'
import v2 from '../../../banner/bmw.jpg'
import v3 from '../../../banner/mazda.jpg'
import v4 from '../../../banner/honda.jpg'
import Products from '../../Products/Products';
import useProducts from '../../../useProducts';
import { Link } from 'react-router-dom';
import Spin from '../../Spinner/Spinner';
import top1 from '../../../cars/honda.jpg';
import top2 from '../../../cars/land-rover.jpg';
import top3 from '../../../cars/nissan.jpg';
import importer1 from '../../../importer/player-1.png';
import importer2 from '../../../importer/player-3.png'
import importer3 from '../../../importer/player-5.png'


const Home = () => {

    const [products] = useProducts()
    const productsSliced = products.slice(0, 6)





    return (
        <div>

            <br />
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={v1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={v2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={v3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={v4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <div>


                {
                    productsSliced ? productsSliced.map(product => <Products key={product._id} product={product} ></Products>) : <Spin></Spin>

                }




            </div>

            <div>
                <Link to='/manageInventory'> <button className='btn btn-primary'> Manage Inventory </button> </Link>
            </div>
            <br /><br />
            <div>
                <h2 className='text-success'>TOP SELLING CARS</h2><br />
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '75%', justifyContent: 'space-between', margin: 'auto' }}>
                    <div className="card  mb-5" style={{ width: '18rem', boxShadow: '0 0 30px 2px lightGray ' }}>
                        <img src={top1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-start">Honda Accords</h5>
                            <p className="card-text  text-start text-dark">Price : 6700000</p>

                        </div>
                    </div>
                    <div className="card  mb-5" style={{ width: '18rem', boxShadow: '0 0 30px 2px lightGray ' }}>
                        <img src={top2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-start">Land Rover Discovery</h5>
                            <p className="card-text  text-start  text-dark">Price : 7500000</p>

                        </div>
                    </div>
                    <div className="card  mb-5" style={{ width: '18rem', boxShadow: '0 0 30px 2px lightGray ' }}>
                        <img src={top3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-start text-start">Nissan Kicks</h5>
                            <p className="card-text text-start  text-dark">Price : 7100000</p>

                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div>
                <h2 className='text-success'>TOP SELLING CARS</h2><br />
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '75%', justifyContent: 'space-between', margin: 'auto' }}>
                    <div className="card  mb-5" style={{ width: '18rem', boxShadow: '0 0 30px 2px lightGray ' }}>
                        <div style={{ height: '250px', paddingTop: '20px', backgroundColor: 'lightgray' }}> <img src={importer1} className="card-img-top w-75 mx-auto" alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title pt-4">shakil Ahmed</h5>
                        </div>
                    </div>
                    <div className="card  mb-5" style={{ width: '18rem', boxShadow: '0 0 30px 2px lightGray ' }}>
                        <div style={{ height: '250px', paddingTop: '20px', backgroundColor: 'lightgray' }}> <img src={importer2} className="card-img-top w-75 mx-auto" alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title pt-4">Soleman Shah</h5>
                        </div>
                    </div>
                    <div className="card  mb-5" style={{ width: '18rem', boxShadow: '0 0 30px 2px lightGray ' }}>
                        <div style={{ height: '250px', paddingTop: '20px', backgroundColor: 'lightgray' }}> <img src={importer3} className="card-img-top w-75 mx-auto" alt="..." /></div>
                        <div className="card-body">
                            <h5 className="card-title pt-4">Mohammad Ali</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;