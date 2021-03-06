import React from "react"
import { graphql } from "gatsby"
import{
    Container,
    Content,
    ContentCard,
    Pagination,
    FeatureImage,
} from "../components"

import { H1, P } from "../elements"

//The allposts page and parameters pagecontext and data
const allPosts = ({ pageContext, data }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${ currentPage - 1}`
    const nextPage = `/${ currentPage + 1}`

    const posts = data.allMdx.edges

    //Returns the container component and the children defined within the tags
    return(
        <Container>
          <FeatureImage />
            <Content>
                <H1 size ="large" margin="0 0 1rem 0">
                Elit rhoncus tellus proin parturient.
                 </H1>
                <P size="small" weight="normal" height="medium" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
                volutpat risus quis lorem pulvinar et pulvinar sit dictum. Eget orci,
                orci in congue cursus nulla tincidunt facilisi.
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}

            <Pagination 
                isFirst = {isFirst}
                isLast = {isLast}
                prevPage = {prevPage}
                nextPage = {nextPage}
            />
          </Content>
        </Container>
    )
}

export default allPosts

//Uses query to grab info of which it will display on tha page
export const pageQuery = graphql`
query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`