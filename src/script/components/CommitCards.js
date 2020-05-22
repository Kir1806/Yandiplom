
export default class CommitCards {
    constructor (dates) {
        this.dates = dates;
    }

    commitCardError(message) {
        this.swiperSlide = document.createElement('div');
        this.emptyText = document.createElement('p');
        this.swiperSlide.classList.add('swiper-slide');
        this.emptyText.classList.add('empty-text');
        this.emptyText.textContent = message;
        this.swiperSlide.appendChild(this.emptyText);
        return this.swiperSlide;
    }

    createCommitCard(data) {
        const date = this.dates.dateForCards(data.commit.committer.date);
        const avatar = data.author.avatar_url;
        const name = data.commit.committer.name;
        const email = data.commit.committer.email;
        const message = data.commit.message;

        this.swiperSlide = document.createElement('div');
        this.slideBlock = document.createElement('div');
        this.slideBlockData = document.createElement('p');
        this.slideBlockUser = document.createElement('div');
        this.userPhoto = document.createElement('img');
        this.userInfo = document.createElement('div');
        this.userInfoName = document.createElement('p');
        this.userInfoMail = document.createElement('p');
        this.slideBlockText = document.createElement('p');

        this.swiperSlide.appendChild(this.slideBlock);

        this.slideBlock.appendChild(this.slideBlockData);
        this.slideBlock.appendChild(this.slideBlockUser);
        this.slideBlock.appendChild(this.slideBlockText);

        this.slideBlockUser.appendChild(this.userPhoto);
        this.slideBlockUser.appendChild(this.userInfo);

        this.userInfo.appendChild(this.userInfoName);
        this.userInfo.appendChild(this.userInfoMail);

        this.swiperSlide.classList.add('swiper-slide');
        this.slideBlock.classList.add('slide-block');
        this.slideBlockData.classList.add('slide-block__data');
        this.slideBlockUser.classList.add('slide-block__user');
        this.userPhoto.classList.add('user-photo');
        this.userInfo.classList.add('user-info');
        this.userInfoName.classList.add('user-info__name');
        this.userInfoMail.classList.add('user-info__mail');
        this.slideBlockText.classList.add('slide-block__text');

        this.userPhoto.setAttribute('alt', 'фотография пользователя');

        this.slideBlockData.textContent = date;
        this.userPhoto.setAttribute('src', avatar);
        this.userInfoName.textContent = name;
        this.userInfoMail.textContent = email;
        this.slideBlockText.textContent = message;

        return this.swiperSlide;
    }
}