<template>
    <h2>Our Stones</h2>
    <Carousel :value="products" :numVisible="3" :numScroll="1">
        <template #item="slotProps">
            <div class="product-item">
                <div class="product-content">
                    <div>
                        <img src="../assets/dark-marble.jpg" :alt="slotProps.data.name" style="width: 90%; height: 300px;"/>
                    </div>
                    <div>
                        <h3 class="product-title">{{slotProps.data.name}}</h3>
                        <p class="product-description">{{slotProps.data.description}} </p>

                        <div class="car-buttons">
                            <Button label="Learn More" class="p-button-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Carousel>
</template>

<script>

export default {
    name: 'ProductCarousel',
    data() {
        return {
            products: [
                {"name": "Dark Stone", "description": "Product Description", "image": "dark-marble.jpg"},
                {"name": "White Stone", "description": "Product Description", "image": "white-marble.jpg"},
                {"name": "Green Stone", "description": "Product Description", "image": "green-marble.jpg"},
                {"name": "Navy Blue Stone", "description": "Product Description", "image": "naby-blue-marble.jpg"},
                {"name": "Pink Stone", "description": "Product Description","image": "pink-marble.jpg"},
            ]
        }
    }
}
</script>
