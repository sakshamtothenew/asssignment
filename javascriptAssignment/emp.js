const empdata = [
    {
      "age": 35,
      "DOB": "1993-02-14T10:10:48 -06:-30",
      "name": "Joseph Henderson",
      "salary": 3581
    },
    {
      "age": 40,
      "DOB": "1997-09-27T09:48:30 -06:-30",
      "name": "Lidia Hampton",
      "salary": 6290
    },
    {
      "age": 33,
      "DOB": "2002-08-09T10:25:05 -06:-30",
      "name": "Castro Brennan",
      "salary": 7825
    },
    {
      "age": 40,
      "DOB": "2014-02-24T06:38:32 -06:-30",
      "name": "Judy Bryant",
      "salary": 8174
    },
    {
      "age": 26,
      "DOB": "2014-04-12T11:53:34 -06:-30",
      "name": "Cotton Hansen",
      "salary": 1072
    },
    {
      "age": 27,
      "DOB": "1978-03-09T07:21:21 -06:-30",
      "name": "Marcia Kramer",
      "salary": 5139
    },
    {
      "age": 29,
      "DOB": "1982-04-20T09:58:49 -06:-30",
      "name": "Kline Dudley",
      "salary": 100
    },
    {
      "age": 23,
      "DOB": "1975-04-11T09:28:58 -06:-30",
      "name": "Cabrera Wells",
      "salary": 2997
    },
    {
      "age": 26,
      "DOB": "1985-11-03T03:09:16 -06:-30",
      "name": "Bryant Morris",
      "salary": 785
    },
    {
      "age": 35,
      "DOB": "1994-12-01T04:17:05 -06:-30",
      "name": "Tabatha Knowles",
      "salary": 7650
    },
    {
      "age": 31,
      "DOB": "1970-06-16T07:27:15 -06:-30",
      "name": "Wanda Downs",
      "salary": 8943
    },
    {
      "age": 21,
      "DOB": "1970-11-17T04:43:35 -06:-30",
      "name": "Mai Black",
      "salary": 1005
    },
    {
      "age": 29,
      "DOB": "1993-08-09T03:06:55 -06:-30",
      "name": "Taylor Hancock",
      "salary": 7743
    },
    {
      "age": 39,
      "DOB": "1971-05-13T11:55:00 -06:-30",
      "name": "Ellis Clayton",
      "salary": 2590
    },
    {
      "age": 24,
      "DOB": "2012-05-03T01:43:38 -06:-30",
      "name": "Doyle Pena",
      "salary": 9572
    },
    {
      "age": 39,
      "DOB": "2010-05-09T06:12:05 -06:-30",
      "name": "Audrey Tyler",
      "salary": 9682
    },
    {
      "age": 20,
      "DOB": "1985-12-25T06:16:55 -06:-30",
      "name": "Pennington Swanson",
      "salary": 1028
    },
    {
      "age": 36,
      "DOB": "2000-03-08T03:45:52 -06:-30",
      "name": "Grant Rutledge",
      "salary": 7739
    },
    {
      "age": 38,
      "DOB": "2003-07-09T02:10:18 -06:-30",
      "name": "Hall Edwards",
      "salary": 6910
    },
    {
      "age": 27,
      "DOB": "2003-08-22T06:22:06 -06:-30",
      "name": "Jeanine Travis",
      "salary": 7544
    },
    {
      "age": 25,
      "DOB": "2012-10-01T02:17:55 -06:-30",
      "name": "Lillie Martinez",
      "salary": 1934
    },
    {
      "age": 34,
      "DOB": "2005-06-28T09:42:06 -06:-30",
      "name": "Camacho Montoya",
      "salary": 4744
    },
    {
      "age": 24,
      "DOB": "1997-05-05T11:47:09 -06:-30",
      "name": "White Valencia",
      "salary": 3212
    },
    {
      "age": 20,
      "DOB": "2002-02-09T07:49:35 -06:-30",
      "name": "Eleanor Sawyer",
      "salary": 5119
    },
    {
      "age": 34,
      "DOB": "1988-05-10T01:48:08 -06:-30",
      "name": "June Wynn",
      "salary": 2977
    },
    {
      "age": 32,
      "DOB": "1979-10-29T12:17:41 -06:-30",
      "name": "Summers Gilmore",
      "salary": 2680
    },
    {
      "age": 21,
      "DOB": "2017-11-24T11:50:59 -06:-30",
      "name": "Leonor Dominguez",
      "salary": 1261
    },
    {
      "age": 20,
      "DOB": "1985-04-06T10:56:59 -06:-30",
      "name": "Victoria Harding",
      "salary": 9764
    },
    {
      "age": 21,
      "DOB": "2003-08-03T11:22:10 -06:-30",
      "name": "Deanna Hart",
      "salary": 8668
    }
  ]


  console.log(empdata);
  
  // filter those whose salary is greater than 5000
  const sal = empdata.filter((o) => {

    if(o.salary>5000)
    {
      return o;
    }
  })


   console.log(sal);

   
   

// update salary with salary less than 1000 and age greater than 20

   const updatesal = empdata.map((o) => {

     if(o.salary<1000&&o.age>20)
     {   

       console.log(o)
       o.salary*=5;
       console.log(o)
     }
   })

  //  console.log(empdata);


  //  group them on the basis of their age;



  var ageobj = {};
  

  for(i in empdata)
  {
      if(ageobj.hasOwnProperty(empdata[i].age))
      {
           ageobj[empdata[i].age].push(empdata[i]);
      }
       else{
        ageobj[empdata[i].age] = [];

         ageobj[empdata[i].age].push(empdata[i])
       }
      
  }

  console.log(ageobj)