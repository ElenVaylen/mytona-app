import React from 'react'
import {ContentBg} from '../../containers/ContentBg/ContentBg'
import {PageTitle} from '../../components/PageTitle/PageTitle'

export const MainPage = () => {
  return (
    <div className='main-page'>
      <ContentBg>
        <PageTitle title='Dark Souls 3' />
        <div className="text-container">
          <h3 className='page-sub-title'>Overview</h3>
          <p className='text-container__paragraph'>Dark Souls III is an action role-playing video game developed by and published by for PlayStation 4, Xbox One, and Microsoft Windows.
            The third entry in the "Dark Souls" series, Dark Souls III was released in Japan in March 24th 2016, and worldwide in April 12th 2016.
            See New Player Help for an overview of game basics, and Common Souls Terms for an evolving glossary of the community lexicon.</p>
        </div>
        <div className="text-container">
          <h3 className='page-sub-title'>Gameplay</h3>
          <p className='text-container__paragraph'>In Dark Souls III the player controls a character from a third-person perspective through the dark fantasy world of Lothric.
            The gameplay is similar to other entries in the series, players are equipped with a variety of weapons, items, and magic to battle against enemies.
            Similarities to other titles in the series, such as Bonfires, which serve as progress-saving "checkpoints", and Estus Flasks, which serve as health and magic/skill replenishing
            itmes return. New gameplay elements include the return of the magic meter from Demon's Souls, and a new combat system, giving player's additional weapon-specific
            skills that provide power-ups or deliver powerful special attacks. Combat is faster and more fluid in Dark Souls III than previous installments, and players' movements,
            such as backstepping and swinging heavy weapons, are performed more rapidly.</p>
        </div>
      </ContentBg>
    </div>
  )
}