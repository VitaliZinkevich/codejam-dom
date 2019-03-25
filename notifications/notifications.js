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

        

// block for notification info
        let notificationsView = document.createElement('div')
        notificationsView.setAttribute('class', 'notification-item')
        
        let dummyInfo = document.createTextNode(info[0])
        notificationsView.appendChild(dummyInfo)

// current info dot 

        let notificationsList = document.createElement('ul')
        notificationsList.setAttribute('class', 'notification-list')

        let dotItem = document.createElement('li')
        dotItem.setAttribute('class', 'notification-list-item')
        notificationsList.appendChild(dotItem)

        

// build all parts together
        notificationsControls.appendChild(notificationsConstrolLeft) 
        notificationsControls.appendChild(notificationsList)
        notificationsControls.appendChild(notificationsConstrolRight)
        
        



        notification.appendChild(notificationsView)
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

    })



    }
    
}



