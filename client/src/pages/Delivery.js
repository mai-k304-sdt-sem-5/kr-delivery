import Container from 'react-bootstrap/Container'

const Delivery = () => {
    return (
        <Container>
            <h1>Доставка</h1>
            <form action=""> <fieldset> <legend>Выберите тип доставки</legend>
                <input type="radio" name="language" value="html"/>Самовывоз<br></br>
                <input type="radio" name="language" value="css"/>Доставка
            </fieldset>
            </form>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1e1b274cfc81218624c5da5cf029dc3fe8c31e8b26f74cceb2bfcfd89435bb4&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
        </Container>  
    )
}

export default Delivery