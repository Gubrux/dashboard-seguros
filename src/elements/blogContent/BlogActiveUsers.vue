<template>
  <div class="card-body">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="blog-img">
          <img src="../../assets/images/blog/professional.jpg" alt="" class="blk-img" />
          <div class="blog-text">
            <h2>This quote highlights the importance of writing clear.</h2>
            <img
              src="../../assets/images/contacts/pic1.jpg"
              class="avatar rounded-circle me-2"
              alt=""
            />
            <span>Hary in February 05, 2024</span>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="blog-post">
          <div
            class="post-1"
            v-for="({ img, img2, name, badge, date, title, badgeColor }, ind) in activeUsers"
            :key="ind"
          >
            <img :src="img" class="avatar rounded-circle me-2 custome-avatar" alt="" />
            <div class="post-data">
              <span :class="`badge ${badgeColor} border-0 badge-sm`">{{ badge }}</span>
              <h4>{{ title }}</h4>
              <div>
                <img :src="img2" class="avatar rounded-circle me-2 small-post" alt="" />
                <span
                  ><b class="text-primary">{{ name }}</b
                  >{{ date }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IMAGE from '@/constent/Theme'

export default defineComponent({
  name: 'activeUsers',
  setup() {
    return {
      activeUsers: [
        {
          img: IMAGE.friendsF1,
          img2: IMAGE.contactPic2,
          badge: 'DESIGNER',
          badgeColor: 'badge-secondary',
          title: 'Good programmers write code that humans can understand.',
          name: 'Marry',
          date: 'in March 05, 2024'
        },
        {
          img: IMAGE.friendsF2,
          img2: IMAGE.contactPic1,
          badge: 'SOFTWARE',
          badgeColor: 'badge-primary',
          title: 'rogramming isn t about what you know its about what you can figure out.',
          name: 'Harry',
          date: 'in April 05, 2024'
        },
        {
          img: IMAGE.friendsF3,
          img2: IMAGE.contactPic1,
          badge: 'MARKETING',
          badgeColor: 'badge-warning',
          title:
            'Debugging is like being a detective in a crime movie where youre also the murderer.',
          name: 'Honey',
          date: 'in April 05, 2024'
        },
        {
          img: IMAGE.friendsF4,
          img2: IMAGE.contactPic1,
          badge: 'SOFTWARE',
          badgeColor: 'badge-success',
          title: 'The best way to predict the future is to invent it.',
          name: 'Honey',
          date: 'in April 05, 2024'
        },
        {
          img: IMAGE.friendsF2,
          img2: IMAGE.contactPic1,
          badge: 'HARDWARE',
          badgeColor: 'badge-secondary',
          title: 'The best way to predict the future is to invent it.',
          name: 'Honey',
          date: ' in April 05, 2024'
        }
      ]
    }
  }
})
</script>

<style scoped></style>
