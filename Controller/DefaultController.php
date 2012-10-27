<?php

namespace Devtime\Bundle\RafflerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/raffler")
     * @Template()
     */
    public function indexAction()
    {
        return array();
    }
    /**
    *
    * @Route("/api/entries/{id}")
    */
    public function apiEntryUpdateAction()
    {
      $request = $this->get('request');

      $params = array();
      $content = $request->getContent();
      if (!empty($content))
      {
          $params = json_decode($content, true); // 2nd param to get as array
      }

       if ($request->getMethod() == 'PUT')
        {
          if (empty($params['id']))
            {
               $errors = array ('errors' => array('id' => array('id can\'t be blank')));
               $response = new Response(json_encode($errors));
               $response->setStatusCode(422);
               return $response;

            }

          //TODO: update entries array 
          return new Response();

        }


    }

    /**
    *
    * @Route("/api/entries")
    */
    public function apiEntriesAction()
    {

      $entries = array(
                        array('id'=>1,'name' => '@gigo6000', 'winner' => false),
                        array('id'=>2,'name' => '@symfonycol', 'winner' => false)
                 ); 

      $request = $this->get('request');

      $params = array();
      $content = $request->getContent();
      if (!empty($content))
      {
          $params = json_decode($content, true); // 2nd param to get as array
      }

      if ($request->getMethod() == 'GET')
       {
          return new Response(json_encode($entries));
       }
      else
       if ($request->getMethod() == 'POST')
        {
          if (empty($params['name']))
            {
               $errors = array ('errors' => array('name' => array('name can\'t be blank')));
               $response = new Response(json_encode($errors));
               $response->setStatusCode(422);
               return $response;
  
            }
 
          array_push($entries, array('name' =>$params['name']));
          return new Response(json_encode($entries));
         
        }
    }

}
