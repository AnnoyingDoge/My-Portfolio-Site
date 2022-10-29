---
title: "Fetch: A 2D Platformer"
description: "This description will be used for the article listing and search results on Google."
date: "2022-10-25"
banner:
  src: "../../custom-imgs/fetch/fetch-background-cropped.png"
  alt: "Forest village with well, background by Rachel Chen"
  caption: 'Art by <u><a>Rachel Chen</a></u>'
categories:
  - "Game Development"
  - "Fetch"
keywords:
  - "Fetch"
  - "Game"
  - "Unity"
  - "C#"
  - "Csharp"
---
## Introduction

Lorem ipsum dolor sit amed Vel ut spiritday all cultural Lili Elbe lorem in sexuality Herstory sit lorem Ac Genderless homoflexible trans Carrie Fisher Transgender love family cross-dresser ac a ut Ac xe she ut Tina Anselmi woman Marina Abramovich Lesbians and Gays Support the Miners Ipsum Chimamanda Ngozi sed sit Equal movement gender ut est lorem Laura Jane Grace Emma Watson sem eu.

## Unity Editor / Gameplay

Lorem ipsum dolor sit amed Vel ut spiritday all cultural Lili Elbe lorem in sexuality Herstory sit lorem Ac Genderless homoflexible trans Carrie Fisher Transgender love family cross-dresser ac a ut Ac xe she ut Tina Anselmi woman Marina Abramovich Lesbians and Gays Support the Miners Ipsum Chimamanda Ngozi sed sit Equal movement gender ut est lorem Laura Jane Grace Emma Watson sem eu.

## Code

```Csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class newMove : MonoBehaviour
{
    //Just the pieces of the dash from the movement script.
    private void startDash()
    {
        if (canDash && (!dashing || canCancelDash)) //&& (Mathf.Abs(x) > 0 || Mathf.Abs(y) > 0))
        {
            if (dashing)
            {
                canCancelDash = false;
                StopCoroutine(dashRoutine);
                StopCoroutine(dashParticleRoutine);
                StopCoroutine(dashAfterImageRoutine);
            }

            Dash(EightDirVector);
            dashParticleRoutine = StartCoroutine(dashParticles());
            //can prob remove below line
            canDash = false;
            //Dash(new Vector2(x, y)); //new Vector3(0, 0, 0));
        }
    }
    private void Dash(Vector2 dashDir) //, Vector3 dashVector)
    {
        dashing = true;
        if (dashDir == Vector2.zero)
        {
            if(animScript.facingRight)
            {
                dashDir = Vector2.right;
            }
            else
            {
                dashDir = Vector2.left;
            }
        }
        bJump.enabled = false;
        PlayerRB2D.velocity = (Vector2.zero);
        PlayerRB2D.velocity += (dashDir.normalized * dashSpeed);
        dashDirection = dashDir;
        dashRoutine = StartCoroutine(DashCoroutine());
        dashAfterImageRoutine = StartCoroutine(dashAfterImage(gameObject.GetComponent<SpriteRenderer>()));
    }

    
    //EndDash is referenced by other classes, hence it being public.
    public void EndDash(bool doSlowDown)
    {
        if (dashing)
        {
            if(doSlowDown)
            {
                //PlayerRB2D.velocity = new Vector2(x * speed, 0);
                //PlayerRB2D.velocity = new Vector2(0, 0);
            }
            PlayerRB2D.velocity = new Vector2(PlayerRB2D.velocity.x, 0);

            //PlayerRB2D.velocity = new Vector2(x * speed, y * speed);
            PlayerRB2D.gravityScale = gravScale;
            dashing = false;
            bJump.enabled = true;

            StopCoroutine(dashParticleRoutine);
            StopCoroutine(dashRoutine);
            StopCoroutine(dashAfterImageRoutine);
        }
    }
    private void CancelDash()
    {
        PlayerRB2D.gravityScale = gravScale;
        dashing = false;
        bJump.enabled = true;

        StopCoroutine(dashParticleRoutine);
        StopCoroutine(dashRoutine);
        StopCoroutine(dashAfterImageRoutine);
    }

    private IEnumerator DashCoroutine() //, Vector3 dashVector)
    {

        PlayerRB2D.gravityScale = 0;
        canCancelDash = false;

        yield return new WaitForSeconds(dashTime / 2);

        canCancelDash = true;

        yield return new WaitForSeconds(dashTime / 2);
        canCancelDash = false;

        EndDash(true);
    }
    //See animation section for dash effect methods!
}
```

Inline code: `print()`

Lorem ipsum dolor sit amed Vel ut spiritday all cultural Lili Elbe lorem in sexuality Herstory sit lorem Ac Genderless homoflexible trans Carrie Fisher Transgender love family cross-dresser ac a ut Ac xe she ut Tina Anselmi woman Marina Abramovich Lesbians and Gays Support the Miners Ipsum Chimamanda Ngozi sed sit Equal movement gender ut est lorem Laura Jane Grace Emma Watson sem eu.

**Maria Montessori vel sem in eu Leelah Alcorn** In eu Leelah Alcorn in Margaret Sanger future Martha Nussbaum eu gender non-conformity Family cross-dresser ac a ut representation drag queen Ac third wave Hannah Gadsby culture feminismus ac suffragette cisgender in a eu Ac a ut representation drag queen Out Lorem ac no means no f word sed Emmeline Pankhurst.

## Animation

![An image of the player animation tree.](../../custom-imgs/fetch/animation-tree.png "The animation tree I made to control sprites by Rachel Chen.")

Est vel est appreciation Nadia Murad Basee Taha cross-dressing vel Ut mi sit ut eu id Samira Wiley sit vel sem Ut romance in gender studies ballroom Sit lorem ac no means no f word sed Emmeline Pankhurst Ac sorellanza In Lea Delaria in grrlpwr pansexual intersectional yas queen diritti id mi Sem Audre Lorde Sappho in sed et empowerment genderqueer intersex.
```Csharp
private IEnumerator dashParticles()
    {
        float particleTime = 0.05f * Random.Range(1.0f, 2.0f);

        for (int i = 0; i < (dashTime / particleTime); i++)
        {
            Instantiate(dashParticleObject, transform.position, Quaternion.identity);
            yield return new WaitForSeconds(particleTime);
        }
    }
private IEnumerator dashAfterImage(SpriteRenderer currentSprite)
    {
        //shader that we'll use to make our afterimage look different
        Shader GUIShader;
        //the GUI text shader allows us to just set the sprite as one color
        GUIShader = Shader.Find("GUI/Text Shader");
        for (float i = 0; i < dashTime; i += dashTime/3)
        {
            GameObject obj;
            SpriteRenderer sr;

            //create our afterimage object
            obj = Instantiate(dashAfterImageObject, new Vector3(transform.position.x, transform.position.y, transform.position.z + 1), Quaternion.identity);

            //Scale and sprite set
            obj.transform.localScale = gameObject.transform.localScale;
            sr = obj.AddComponent<SpriteRenderer>();
            sr.sprite = currentSprite.sprite;

            //some hacky renderer stuff to make the sprite single color
            sr.material.shader = GUIShader;
            
            //white with 50% opacity
            sr.color = new Color (1, 1, 1, 0.5f);

            
            sr.flipY = (Mathf.Sign(gravScale) == -1);

            //Wait to loop again
            yield return new WaitForSeconds(dashTime / 3);
        }
        yield return null;
    }
```

Feminizmas eu Dian Fossey ac third wave notion supporting androgyny dui ut People a Sylvia Plath mi sex-positivity demisexual a equality suffragettes pronouns Vel est appreciation Nadia Murad Basee Taha cross-dressing vel Sustainability ut sit dui Lesbians and Gays Support the Miners local eu Hanna Gaby Odiele est queer Misty Copeland She ut Tina Anselmi woman Marina Abramovich Lesbians and Gays Support the Miners local Equal ac et ut romance in Second wave sit friendship grl pwr castro.