import React from 'react';
import { Carousel } from 'react-bootstrap';
import v1 from '../../../banner/tesla.jpg'
import v2 from '../../../banner/bmw.jpg'
import v3 from '../../../banner/mazda.jpg'
import v4 from '../../../banner/honda.jpg'
import Products from '../../Products/Products';
import useProducts from '../../../useProducts';

const Home = () => {

    const [products] = useProducts()
    const productsSliced = products.slice(0, 3)
    return (
        <div>
            <h2>this is home</h2>

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
                    productsSliced.map(product => <Products key={product._id} product={product} ></Products>)
                }

            </div>

        </div>
    );
};

export default Home;