<?php

namespace Devtime\Bundle\RafflerBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/raffler');

        $this->assertTrue($crawler->filter('html:contains("Raffler")')->count() > 0);
    }
}
