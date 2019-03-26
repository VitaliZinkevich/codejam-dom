window.onload = function (){

    let usefullInfo = [
        'Dont grow up. Its a trap',
        'Don’t yell at your kids. Lean in close and whisper its much scarier. ',
        'You have to remember one thing about the will of the people. It wasnt long ago that we were swept away by the Macarena!',
        'Dont get mad get a puppy!',
        'Never test the waters with two feet.',
        'Accept who you are. Unless youre a serial killer.'
    ]
    
    
    showNotification(usefullInfo)
    

    function showNotification(info) {
// disabled by user before ?
        if (window.localStorage.getItem('displayInfoNotification')) {
            return false
        }
// root    
        let notification = document.createElement('section')
        notification.setAttribute('class', 'notification')

// container for info        
        let notificationsContainer = document.createElement('div')
        notificationsContainer.setAttribute('class', 'notification-container')
        

// title
        let notificationsTitle = document.createElement('h1')
        notificationsTitle.setAttribute('class', 'notification-title')
        let notificationsTitleContent = 'Email tip of the day:'.toUpperCase()
        let notificationsTitleText = document.createTextNode(notificationsTitleContent)
        notificationsTitle.appendChild(notificationsTitleText)
        notification.appendChild(notificationsTitle)   
        
// footer
        let notificationsFooter = document.createElement('footer')
        notificationsFooter.setAttribute('class', 'notification-footer')

// input and laber for him
        let notificationsLabel = document.createElement('label')
        notificationsLabel.setAttribute('class', 'notification-label')

        let notificationsLabelSpan = document.createElement('span')
        notificationsLabelSpan.setAttribute('class', 'notification-label-text')
        let notificationsLabelSpanText = document.createTextNode('Disable')
        notificationsLabelSpan.appendChild(notificationsLabelSpanText)

        let notificationsInput = document.createElement('input')
        notificationsInput.setAttribute('class', 'notification-checkbox')
        notificationsInput.setAttribute('type', 'checkbox')

        notificationsLabel.appendChild(notificationsInput)
        notificationsLabel.appendChild(notificationsLabelSpan)
        notificationsFooter.appendChild(notificationsLabel)

               
// close notification buton
        let notificationsControls = document.createElement('div')
        notificationsControls.setAttribute('class', 'notification-controls')

        let notificationsControlsClose = document.createElement('button')
        notificationsControlsClose.setAttribute('class', 'notification-controls-close')
        let notificationsControlsCloseText = document.createTextNode('\u2715')
        notificationsControlsClose.appendChild(notificationsControlsCloseText)

        notificationsControls.appendChild(notificationsControlsClose)

// controls left and right
        let notificationsConstrolLeft = document.createElement('button')
        notificationsConstrolLeft.setAttribute('class', 'notification-constrol-btn notification-constrol-left')
        let notificationsConstrolLeftText = document.createTextNode('\u276E')
        notificationsConstrolLeft.appendChild(notificationsConstrolLeftText)
      

        let notificationsConstrolRight = document.createElement('button')
        notificationsConstrolRight.setAttribute('class', 'notification-constrol-btn notification-constrol-right')
        let notificationsConstrolRightText = document.createTextNode('\u276F')
        notificationsConstrolRight.appendChild(notificationsConstrolRightText)

        notificationsControls.appendChild(notificationsConstrolLeft) 
        
// block for notification info
        
        let currentIndex = 0
        let notificationsView = document.createElement('div')
        notificationsView.setAttribute('class', 'notification-item')

        function buildTips(index) {

            let notificationContainerDom = document.querySelector('.notification-item')
            if (notificationContainerDom) {
                notificationContainerDom.innerHTML = ''
            }
          
            let infoItem = document.createElement('p')
            infoItem.setAttribute('class', 'notification-item')
            infoItem.appendChild(document.createTextNode(info[index]))
            
            //console.log(info[index])
            notificationsView.appendChild(infoItem)
            
            
        }
       
        buildTips(currentIndex)
        notification.appendChild(notificationsView) 

// current info dot 

        let notificationsList = document.createElement('ul')
        notificationsList.setAttribute('class', 'notification-list')

        function buildDots(activeDot) {
            
            let notificationList = document.querySelector('.notification-list')
            if (notificationList) {
                notificationList.innerHTML = ''
            }

            info.forEach((item, index) => {
                let dot = document.createElement('li')
                if (index === activeDot) {
                    dot.setAttribute('class', 'notification-list-item current')
                } else {
                    dot.setAttribute('class', 'notification-list-item')
                }
    
                notificationsList.appendChild(dot)
                
                
            })
        }
        buildDots(currentIndex)
        notificationsControls.appendChild(notificationsList)
        notificationsControls.appendChild(notificationsConstrolRight)

// build all parts together
       
        
        notificationsFooter.appendChild(notificationsControls)
        notification.appendChild(notificationsFooter)
       
        document.body.appendChild(notification)

// events at info notification

    document.querySelector('body').addEventListener('click', (e) => {
    
        // close info notification
        if (e.target.className === 'notification-controls-close') {
            document.querySelector('.notification').classList.add('hide')
            e.stopPropagation()
        }

    // disable info notification
    
        if (e.target.className === 'notification-checkbox') {
            if (window.localStorage.getItem('displayInfoNotification')) {
                window.localStorage.removeItem('displayInfoNotification')
            } else {
                window.localStorage.setItem('displayInfoNotification', true)
            }      
            
            e.stopPropagation()
        }

// move

        let classListArr = [...e.target.classList]

        if (classListArr.some(item => item === 'notification-constrol-left')) {
            //console.log('move left')
            moveInfoLeft(e)
        }

        if (classListArr.some(item => item === 'notification-constrol-right')) {
            moveInfoRight(e)
        }

    })

    function moveInfoLeft(e) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = (info.length - 1)
        }
        buildTips(currentIndex)
        buildDots(currentIndex)
        e.stopPropagation()
    }

    function moveInfoRight(e) {
        if (currentIndex < (info.length - 1)) {
            currentIndex += 1
        } else {
            currentIndex = 0
        }
        buildTips(currentIndex)
        buildDots(currentIndex)
        e.stopPropagation()
    }

   

    let keys = []

    function keysPressed(e) {
        console.log((keys[39]))
        keys[e.keyCode] = true
        if (keys[39]) {
            moveInfoRight(e)
            e.preventDefault()
        }
        if (keys[37]) {
            moveInfoLeft(e)
            e.preventDefault()
        }
    }

    function keysReleased(e) {
        keys[e.keyCode] = false
    }

    window.addEventListener('keydown', keysPressed, false)
    window.addEventListener('keyup', keysReleased, false)


    }
    
}



