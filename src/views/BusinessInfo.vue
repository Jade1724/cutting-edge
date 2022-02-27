<template>
    <div class="px-4">
        <h1>Business Information</h1>
        <div class="business-info grid">
        
            <div class="business-hours col-12 md:col-6">
                <h2>Opening Hours</h2>
                <ul class="text-left">
                    <li>Monday - Friday: 9am - 5pm</li>
                    <li>Saturday: 9am - 3pm</li>
                </ul>

                <h2>Contacts</h2>
                <p>Call us to <a href="tel:0800-1234-567">0800-1234-567</a> or email <a href="mailto:dummy-email@cuttingedge.com">dummy-email@cuttingedge.com</a></p>
            </div>

            <div class="business-location col-12 md:col-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.1637030141055!2d172.56644131576684!3d-43.519778889186654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318ad1c22a6b93%3A0x3e2d75992384d79!2s33C%20Solway%20Avenue%2C%20Ilam%2C%20Christchurch%208041!5e0!3m2!1sen!2snz!4v1645955735993!5m2!1sen!2snz" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'BusinessInfo'
}
</script>


<style scoped>
.about-us-image-wrapper img {
  width: 100%;
}
</style>
