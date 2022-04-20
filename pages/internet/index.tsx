import React from 'react'
import { Container } from '@components/container'
import Link from 'next/link'
import { Header } from '@components/header'
import { Footer } from '@components/footer'

const Internet = () => {
  return (
    <Container>
      <Header />

      <main className="u-constrain">
        <section className="Section u-bgBaseLight u-textDark u-islandT48B72  Section--image" style={{backgroundImage: 'url(/space.png'}} id="tv-og-streaming,-som-det-passer-dig-bedst" data-scroll="in">
              <div className="Hero Grid">
                  <div className="Grid-cell u-span10of12 u-before1of12 u-md-span5of12 u-md-before1of12" data-scroll="in">
                      <section className="Section u-bgStrongTurquoise u-textLight">
                          <div className="u-islandT48B64 u-islandH48">
                              <div className="Copy">
                                  <h1 className="u-serif80">En Rejse i Fronten</h1>
  <p>Hele denne side er serveret af en ny Frontend og er et Proof of Concept på hvad vi kan for at opnå vores mål.</p>
  <p>Bemærk hvor integreret denne app føles som slutbruger.</p>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
      </section>

        <Link href="/">Dette er et next/link</Link>
      </main>

      <Footer />
    </Container>
  )
}

export default Internet