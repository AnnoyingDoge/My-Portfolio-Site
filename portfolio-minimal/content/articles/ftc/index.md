---
title: "Phillips Academy Robotics Club (PARC)"
description: "This description will be used for the article listing and search results on Google."
date: "2022-10-25"
banner:
  src: "../../custom-imgs/robotics/robot-main.jpg"
  alt: "PARC Prototype Robot (V0.5)"
  caption: 'PARC''s Prototype Robot (V0.5)'
categories:
  - "Robotics"
  - "FTC"
keywords:
  - "Robotics"
  - "Java"
  - "FTC"
  - "FIRST"
---

## Introduction

Type here!

## Code

Type here

```java
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class doNotDestroy : MonoBehaviour
{
    //There are a number of objects in the game which should, in almost any case, not be destroyed.
    //This script is simply attached to those game objects.

    // Start is called before the first frame update
    void Start()
    {
        DontDestroyOnLoad(gameObject);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```

Type here
